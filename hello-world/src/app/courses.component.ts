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
            <input #ppppppppp (keyup.enter)="p(ppppppppp.value)"/>
        ` 
})
export class CoursesComponent {
    title = "List of courses";
    courses;
    isActive = false;

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

    p(ppppppppp) {
        console.log('enter was pressed there');
        console.log(ppppppppp);
    }
}