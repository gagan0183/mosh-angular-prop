import { Component } from "@angular/core";
import { CoursesService } from "./course/courses.service";

@Component({
    selector: 'courses',
    template: `
        <h2>{{ title }}</h2>
        <ul>
            <li *ngFor="let course of courses">{{ course }}</li>
        </ul>
        <button class="btn btn-primary">Save</button>
        ` 
})
export class CoursesComponent {
    title = "List of courses";
    courses;

    constructor(coursesService: CoursesService) {
        this.courses = coursesService.getCourses();
    }
}