import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { fetchedRepos, Form } from './form';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FormserviceService {

  username!: any
  person!: Form
  link = "https://api.github.com/users/"


  constructor(private http: HttpClient) {
    this.person = new Form()
   }

   findNewUser(){
    let newUser = new Promise((resolve, reject) =>{
      this.http.get<any>(this.link + this.username + "?access_token'=" + environment.apiToken).toPromise().then(
        (        response: { avatar_url: any; name: any; bio: any; followers: any; following: any; location: any; twitter_username: string}) =>{
          this.person.image = response.avatar_url
          this.person.username = response.name
          this.person.bio = response.bio
          this.person.followers = response.followers
          this.person.following = response.following
          this.person.location = response.location
          this.person.twitter = response.twitter_username
          console.log(this.person)
          resolve(response)
        },error =>{
          reject(console.log('Information cant be fetched'))
        }
      )
    })
    return newUser
   }

              //properties for newrepos
              newRepos:any[] = []
              revs!: any
              reps = new fetchedRepos()
              url = "https://api.github.com/users/"


   findNewRepos(){
     let newRepos = new Promise((resolve, reject) =>{
      this.http.get<any>(this.url + this.username + '/repos').toPromise().then(
        response =>{
          response.forEach((response:any) =>{
            this.reps = new fetchedRepos()
            this.revs.name = response.name
            this.revs.full_name = response.full_name
            this.revs.description = response.description
            this.revs.created_at = response.created_at
            this.revs.html_url = response.html_url
            this.newRepos.push(this.reps)
            resolve(console.log("New Repos infomation can be fetched"))
          });
        },error =>{
          reject(console.log('New repositories cant be found'))
        }
      )
     })
     return newRepos
   }
}
