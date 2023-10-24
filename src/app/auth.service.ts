import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient) { }
  register(UserData:object):Observable<any>{
    return this._HttpClient.post('http://upskilling-egypt.com:3000/contact', UserData);
  }
}
