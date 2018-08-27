import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  contactMethods = [
    { id: 1, name: 'Phone'},
    { id: 0, name :'Email'}
  ];

  constructor() { }

  ngOnInit() {
  }

  p(value) {
    console.log(value);
  }

  submit(f) {
    console.log(f);
  }
}
