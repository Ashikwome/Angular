import { CoursesServise } from './courses.service';
import { Component } from '@angular/core';

// decorator
@Component({
  selector: 'courses',
  // the content inside'{{}}' will be rendered dynamically
  // template: '<h2>{{ title }}</h2>'
  // template: '<h2>{{ "Title:" + title }}</h2>'
  // we can also call a method in here
  // template: '<h2>{{ getTitle() }}</h2>'

  template: `<h1>{{title}}</h1>
  <ul>
  <li *ngFor = "let course of courses"> {{course}} </li>
  </ul>
  <button (click)="onSave($event)"> Save </button> `

  //  ☢️ [style.backgroundColor] = "isActive ? 'blue' : 'white' " ☢️
  //  💯this is the code for button is a fair example of style binding💯
})

// export is for angular to see this class

 export class CourseComponent {
  title = "List Of Courses";
  courses;
  // getTitle(){
  //   return this.title;
  // }
  onSave($event) {
    console.log("Button is Clicked", $event);
  }

  // Logic for calling an HTTP service
  constructor(service: CoursesServise) {
    // we selecting a dependency for this part with construstor
   // so whenever we update or modify anything angular will change it automatically for us
    this.courses = service.getCourses();
  }


  }
