import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsNameService {

  getAuthorsName(){
    return ["David", "Marcus", "Rafi"];
  }
}
