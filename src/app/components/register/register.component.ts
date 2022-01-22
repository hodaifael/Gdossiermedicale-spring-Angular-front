import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Secretaire } from 'src/app/secretaire';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  secretaire = new Secretaire();
  message: string = "";

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
  }

  register() {
    this.dataService.insertAdmin(this.secretaire).subscribe(res => {
      this.secretaire = new Secretaire();
      this.router.navigate(['../']);

    });

  }
}
