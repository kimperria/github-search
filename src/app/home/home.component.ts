import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //user information
  user: User;



  constructor() {
    this.user = {
      githubName: 'John Kimani',
      username: 'John-Kimani',
      bio: 'Apples and more apples',
      followers: 34,
      following:  25,
      location:{
        city: 'Nairobi',
        country: 'Kenya'
      },
      social: '@kimperria'
   }



}
ngOnInit(): void {

}
}
