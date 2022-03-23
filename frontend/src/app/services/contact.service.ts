import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private env:any;
  constructor(private _http:HttpClient) {
    this.env= environment.APP_URL;
  }

  getContactsByPB(id:any){
    return this._http.get<any>(this.env+"contact/contactList/"+id);
  }

  save(contact:any){
    return this._http.post<any>(this.env+"contact/addContact", contact);
  }
}
