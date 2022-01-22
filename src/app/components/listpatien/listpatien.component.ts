import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-listpatien',
  templateUrl: './listpatien.component.html',
  styleUrls: ['./listpatien.component.css']
})
export class ListpatienComponent implements OnInit {
  patiens: any;
  allpatiens: any;
  search: string = '';
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getPatiens();
  }

  searchByname() { // with type info
    if (this.search != "") {
      this.patiens = this.allpatiens.filter((res: any) => {
        return res.nom.match(this.search);
      });
    } else if (this.search == "") {
      this.patiens = this.allpatiens;
    }

  }
  getPatiens() {
    this.dataService.getPatiens().subscribe(res => {
      this.patiens = res;
      this.allpatiens = res;
      console.log(res);
    });
  }

  delete(id: any) {
    this.dataService.deletePatien(id).subscribe(res => {
      this.getPatiens();
    });
  }
}
