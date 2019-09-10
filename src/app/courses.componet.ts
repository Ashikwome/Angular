import { Component } from '@angular/core';

// decorator
@Component({
  selector: 'courses',
  // the content inside'{{}}' will be rendered dynamically
  // template: '<h2>{{ title }}</h2>'
  // template: '<h2>{{ "Title:" + title }}</h2>'
  // we can also call a method in here
  // template: '<h2>{{ getTitle() }}</h2>'

  template: `<h1>{{Title}}</h1>
  <ul>
  <li *ngFor = "let course of courses"> {{course}} </li>
  </ul>
  `
})

// export is for angular to see this class

 export class CourseComponent {
  title = "List Of Courses";
  courses;
  // getTitle(){
  //   return this.title;
  // }

  // Logic for calling an HTTP service

  }
