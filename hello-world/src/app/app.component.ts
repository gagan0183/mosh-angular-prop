import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tweet = {
    body : 'Here is the body of tweet...',
    isLiked: false,
    likesCount: 0
  };
  courses = [];
  viewMode = 'map';

  loadcourses() {
    this.courses = [
      {
        name: 'course1'
      },
      {
        name: 'course9'
      }
    ];
  }

  add() {
    this.courses.push({
      name: 'course99'
    });
  }

  remove(course) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }
}
