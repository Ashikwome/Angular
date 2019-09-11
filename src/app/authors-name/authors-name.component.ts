import { AuthorsNameService } from './../authors-name.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'authors-name',
  templateUrl: './authors-name.component.html',
  styleUrls: ['./authors-name.component.css']
})
export class AuthorsNameComponent implements OnInit {

  title = "Name OF the Authors";
  names;

  constructor( service: AuthorsNameService) {
    this.names = service.getAuthorsName();
  }

  ngOnInit() {
  }

}
