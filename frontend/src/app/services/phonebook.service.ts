import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PhonebookService {
  env:string;

  constructor(private _http:HttpClient) {
    this.env=environment.APP_URL;
   }

  registerP_B(phoneBook:any){
    return this._http.post<any>(this.env+'phoneBook/register', phoneBook);
  }

  getList(){
    return this._http.get<any>(this.env+'phoneBook/phoneBooksList');
  }
}
