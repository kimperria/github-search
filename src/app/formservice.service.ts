import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Form } from './form';

@Injectable({
  providedIn: 'root'
})
export class FormserviceService {

  username: any
  person!: Form
  link = "https://api.github.com/users/"

  constructor(private http: HttpClient) {
    this.username = 'John-Kimani'
    this.person = new Form()
   }

   findNewUser(){
    let newUser = new Promise((resolve, reject) =>{
      this.http.get<any>(this.link + this.username).toPromise().then(
        (        response: { avatar_url: any; name: any; bio: any; followers: any; following: any; location: any; twitter_username: string; full_name: any; description: any; created_at: any; html_url: any; }) =>{
          this.person.image = response.avatar_url
          this.person.username = response.name
          this.person.bio = response.bio
          this.person.followers = response.followers
          this.person.following = response.following
          this.person.location = response.location
          this.person.twitter = response.twitter_username

          this.person.name = response.name
          this.person.full_name = response.full_name
          this.person.description = response.description
          this.person.created_at = response.created_at
          this.person.html_url = response.html_url
          resolve(console.log("Person and repositories can be fetched"))
        },error =>{
          reject(console.log('Information cant be fetched'))
        }
      )
    })
    return newUser
   }
}
