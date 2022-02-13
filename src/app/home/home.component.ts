import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user!: User;

  constructor(private userservice:UserserviceService) {

  }
  ngOnInit(): void {
    this.userservice.fetchPersonalInfomation()
    this.user = this.userservice.user
  }
}
