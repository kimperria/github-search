import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Form } from '../form';
import { FormserviceService } from '../formservice.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  information!: Form;
  newusername!: any;


  constructor(
    private formservice: FormserviceService
  ) { }

  ngOnInit(): void {
    this.formservice.username = this.newusername
    this.formservice.findNewUser()
     this.information = this.formservice.person
  }
  onSubmit(){
    this.formservice.username = this.newusername
    this.formservice.findNewUser()
  }

}
