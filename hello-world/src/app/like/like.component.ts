import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  @Input() isLiked: boolean;
  @Input() likesCount: number;

  constructor() { }

  ngOnInit() {
  }

  ppp() {
    this.isLiked = !this.isLiked;
    if(this.likesCount == 0) {
      this.likesCount = this.likesCount + 1;
    }
    else {
      this.likesCount = this.likesCount - 1;
    }
  }

}
