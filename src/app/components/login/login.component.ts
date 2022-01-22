import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Secretaire } from 'src/app/secretaire';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  secretaire = new Secretaire();
  s: any;
  message: string = "";

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
  }

  auth() {
    this.dataService.getAdmin(this.secretaire).subscribe(res => {
      this.s = res;
      if (res != null) {
        console.log("hello");
        localStorage.setItem('adminId', this.s.id);
        this.router.navigate(['/listmedecin']);
      }
    });

  }
}
