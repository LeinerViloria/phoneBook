import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  registerData:any;

  constructor() {
    this.registerData={};
  }

  ngOnInit(): void {
  }

  registerP_B(){
    
  }

}
