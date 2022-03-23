import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PhonebookService } from 'src/app/services/phonebook.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  registerData:any;
  message:string="";
  horizontalPosition:MatSnackBarHorizontalPosition="right";
  verticalPosition:MatSnackBarVerticalPosition="top";
  durationInSeconds:number=2000;

  constructor(private _phoneBook:PhonebookService,  private _router:Router, private _snackBar:MatSnackBar){
    this.registerData={};
  }

  ngOnInit(): void {
  }

  registerP_B(){
    if(!this.registerData.name){
      this.message="Incomplete data"; 
      this.openSnackBarError();
    }else{
      this._phoneBook.registerP_B(this.registerData).subscribe({
        next: (u)=>{
          this._router.navigate(['/']);
          this.message="Phonebook created";
          this.openSnackBarSuccesfull();
        },
        error:(e)=>{
          this.message="Error to create this phonebook";
          this.openSnackBarSuccesfull();
        }
      });
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

}
