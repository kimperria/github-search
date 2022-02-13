import { Component, OnInit } from '@angular/core';
import { Repo } from '../repo';
import { ReposerviceService } from '../reposervice.service';

@Component({
  selector: 'app-user-repositories',
  templateUrl: './user-repositories.component.html',
  styleUrls: ['./user-repositories.component.css']
})
export class UserRepositoriesComponent implements OnInit {
  
  repos!: Repo[];
  
  constructor(private reposervice:ReposerviceService) { }

  ngOnInit(): void {
    this.reposervice.fetchRepositories()
    this.repos = this.reposervice.repositories
  }

}
