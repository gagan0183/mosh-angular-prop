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
  courses= [9, 9];
}
