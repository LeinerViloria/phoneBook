import { Component, OnInit, ViewChild } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css'],
})
export class ContactsListComponent implements OnInit {
  public contacts: any;
  private id: any;
  private horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  private verticalPosition: MatSnackBarVerticalPosition = 'top';
  private duration: number = 2000;
  private message: string;
  public dataSource: MatTableDataSource<any>;
  public displayedColumns: string[] = ['Name', 'Tel', 'Cel', 'RegisterDate'];
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort = new MatSort();
  public size:number;
  pageSlice:any;

  constructor(
    private _router: Router,
    private _contactService: ContactService,
    private _snackBar: MatSnackBar,
    private _Arouter: ActivatedRoute
  ) {
    this.id = null;
    this.contacts = {};
    this.message = '';
    this.dataSource = new MatTableDataSource(this.contacts);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.size=0;
    //this.pageSlice = this.contacts.sclice(0,3);
  }

  ngOnInit(): void {
    this._Arouter.params.subscribe((params) => {
      this.id = params['_id'];
      this._contactService.getContactsByPB(this.id).subscribe({
        next: (v) => {
          this.contacts = v;
          this.size = v.length;
          this.dataSource = new MatTableDataSource(this.contacts);
          this.message = 'Se encontraron ' + v.length + ' contactos';
          this.openSnackBarSuccesfull();
        },
        error: (e) => {
          localStorage.clear();
          this.message = e.error.msg;
          this.openSnackBarError();
          
          if(this.message!="Invalid Id"){
            this.saveContact();
          }else{
            this._router.navigate(['']);
          }
        }
      });
    });
  }

  openSnackBarSuccesfull() {
    this._snackBar.open(this.message, 'X', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.duration,
      panelClass: ['styleSnackBarSuccesfull'],
    });
  }
  openSnackBarError() {
    this._snackBar.open(this.message, 'X', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.duration,
      panelClass: ['styleSnackBarError'],
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  saveContact(){
    this._router.navigate(['saveContact', this.id]);
  }

  onPageChange(event:PageEvent){
    console.log(event);
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex +event.pageSize;
    if(endIndex > this.size){
      endIndex = this.size;
    }
    this.pageSlice = this.contacts.slice(startIndex, endIndex);
    
  }
}
