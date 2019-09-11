import { AuthorsNameService } from './authors-name.service';
import { AuthorsService } from './authors.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './courses.componet';
import { CoursesServise } from './courses.service';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsNameComponent } from './authors-name/authors-name.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    AuthorsComponent,
    AuthorsNameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    // dependancy injection
    CoursesServise,
    AuthorsService,
    AuthorsNameService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
