import { Component, OnInit } from '@angular/core';
import { Patien } from 'src/app/patien';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-add-patien',
  templateUrl: './add-patien.component.html',
  styleUrls: ['./add-patien.component.css']
})
export class AddPatienComponent implements OnInit {
  patien = new Patien();
  message: string = "";

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  insertPatien() {
    this.dataService.insertPatien(this.patien).subscribe(res => {
      this.patien = new Patien();
      this.message = "patient inserted";
    });

  }
}
