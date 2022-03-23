import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-save-contact',
  templateUrl: './save-contact.component.html',
  styleUrls: ['./save-contact.component.css']
})
export class SaveContactComponent implements OnInit {
  public registerData:any;
  message:string="";
  horizontalPosition:MatSnackBarHorizontalPosition="right";
  verticalPosition:MatSnackBarVerticalPosition="top";
  durationInSeconds:number=2000;
  private id:any;

  constructor(private _contactService:ContactService, private _router:Router, private _snackBar:MatSnackBar, private _Arouter: ActivatedRoute) {
    this.registerData={};
    this.id=null;
   }

  ngOnInit(): void {
    this._Arouter.params.subscribe((params)=>{
      this.id = params['_id'];
    });
  }

  save(){
    if(!this.registerData.name){
      this.message="Incomplete data";
      this.openSnackBarError();
    }else{
      if(!this.registerData.tel && !this.registerData.cel){
        this.message="Save a number";
        this.openSnackBarError();
      }else{
        this.registerData.phoneBookId = this.id;
        this._contactService.save(this.registerData).subscribe({
          next: (v)=>{
            this.message="Contact saved";
            this.openSnackBarSuccesfull();
            this._router.navigate(['contactList', this.id]);
          },
          error: (e)=>{
            this.message=e.error.msg;
            this.openSnackBarError();
          }
        });
      }
    }
  }

  openSnackBarSuccesfull() {
    this._snackBar.open(this.message, 'X', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds,
      panelClass: ['styleSnackBarSuccesfull'],
    });
  }
  openSnackBarError() {
    this._snackBar.open(this.message, 'X', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds,
      panelClass: ['styleSnackBarError'],
    });
 }

 seeList(){
  this._router.navigate(['contactList', this.id]);
 }

}
