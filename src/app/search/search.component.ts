import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Repo } from '../repo';
import { UserserviceService } from '../userservice.service';
import { ReposerviceService } from '../reposervice.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  user!: User;
  repo!: Repo;

  constructor(
    public userService: UserserviceService,
    public reposervice:ReposerviceService
  ) { }

  ngOnInit(): void {
    
  }
  findUsers(){
    this.user = this.userService.user
    console.log(this.user)
  }
}
