import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title : 'app',
    isFavorite: true
  };

  toggle() {
    this.post.isFavorite = !this.post.isFavorite;    
  }
}
