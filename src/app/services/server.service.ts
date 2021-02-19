import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: HttpClient) { }

  // _url = 'http://localhost:3001';
  _url = 'https://peesvceqnd.execute-api.ap-south-1.amazonaws.com/dev/'

  sendEmail(body) {
    return this.http.post(this._url + '/sendEmail', body)
  }

}
