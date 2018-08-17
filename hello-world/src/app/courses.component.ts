import { Component } from "@angular/core";
import { CoursesService } from "./course/courses.service";

@Component({
    selector: 'courses',
    template: `
        <h2>{{ title }}</h2>
        <ul>
            <li *ngFor="let course of courses">{{ course }}</li>
        </ul>
        <p (click)="ppp()">
            <button class="btn btn-primary" [class.active]="isActive" [style.backgroundColor]="isActive ? 'blue' : 'green'" (click)="onSave($event)">Save</button>
        </p>
            <input [(ngModel)]="email" (keyup.enter)="p()"/>
            <p>ppppp | summary:9</p>
        ` 
})
export class CoursesComponent {
    title = "List of courses";
    courses;
    isActive = false;
    email = '';
    ppppp = 'This is sample text for a pipe';

    constructor(coursesService: CoursesService) {
        this.courses = coursesService.getCourses();
    }

    onSave($event) {
        $event.stopPropagation();
        console.log("button is clicked there", $event);
    }

    ppp() {
        console.log('paragrap');
    }

    p() {
        console.log(this.email);
    }
}