import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Repo } from './repo';

@Injectable({
  providedIn: 'root'
})
export class ReposerviceService {

  username = 'John-Kimani';
  repos = new Repo('', '', '', '','')
  repositories:any[] = []
  url = "https://api.github.com/users/"
  constructor(private http: HttpClient) { 

  }
  fetchRepositories(){
    let promise = new Promise((resolve, reject) =>{
      this.http.get<any>(this.url + this.username + '/repos' ).toPromise().then(
        response =>{
          response.forEach((response:any) => {
            this.repos = new Repo('', '','','','')
            this.repos.name = response.name
            this.repos.full_name = response.full_name
            this.repos.description = response.description
            this.repos.created_at = response.created_at
            this.repos.html_url = response.html_url
            this.repositories.push(this.repos)
          });
          
        }, error =>{
          console.log('No Repo Error')
        }
      )
    })
    return promise
  }
}
