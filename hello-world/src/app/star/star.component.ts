import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {

  empty = true;
  full = false;

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.empty = !this.empty;
    this.full = !this.full;
  }

}
