import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user!: User;

  constructor(private userservice:UserserviceService) { }

  ngOnInit(): void {
    this.userservice.fetchPersonalInfomation()
    this.user = this.userservice.user
  }

}
