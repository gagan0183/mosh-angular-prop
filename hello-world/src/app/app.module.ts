import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { AuthorsComponent } from './authors/authors.component';
import { CoursesService } from './course/courses.service';
import { AuthorsService } from './authors/authors.service';
import { SummaryPipe } from './pipe/summary.pipe';
import { StarComponent } from './star/star.component';
import { TitleCaseComponent } from './title-case/title-case.component';
import { TitlePipe } from './pipe/title.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorsComponent,
    SummaryPipe,
    StarComponent,
    TitleCaseComponent,
    TitlePipe,
    FavoriteComponent,
    PanelComponent,
    LikeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    CoursesService,
    AuthorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
