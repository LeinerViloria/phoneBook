import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PhonebookService } from 'src/app/services/phonebook.service';

@Component({
  selector: 'app-phonebooklist',
  templateUrl: './phonebooklist.component.html',
  styleUrls: ['./phonebooklist.component.css']
})
export class PhonebooklistComponent implements OnInit {
  public dataList:any;
  public noData:boolean;

  constructor(private _pBService:PhonebookService, private _router:Router) {
    this.dataList={};
    this.noData=false;
   }

  ngOnInit(): void { 
    this._pBService.getList().subscribe(
      {
        next: (v) =>{
          this.dataList = v;
        },
        error: (e) =>{
          this.noData = true;
        }
      }
    );
  }

}
