import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  private username: string;
  httpClient: any;

  constructor(private http: HttpClient) { 
    this.username = "John-Kimani";
  }
  fetchPersonalInfomation(){
    return this.httpClient.get('https://api/github/users/'+this.username).map((response: any)=>{
      return response
    })
  }
}
