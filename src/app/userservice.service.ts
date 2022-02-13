import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  username: any;
  user!: User
  url = "https://api.github.com/users/"



  constructor(public http: HttpClient) { 
    this.username = "John-Kimani";
    this.user = new User("","","", 0, 0,"","")
  }
  fetchPersonalInfomation(){
    let promise = new Promise((resolve,reject) => {
      this.http.get<any>(this.url + this.username).toPromise().then(
        response => {
          this.user.image = response.avatar_url
          this.user.username = response.name
          this.user.bio = response.bio
          this.user.followers = response.followers
          this.user.following = response.following
          this.user.location = response.location
          this.user.twitter = response.twitter_username
        }, error =>{
          console.log("Error!!")
        }
      )
    })
    return promise
  }
}
