import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { CourselistComponent } from './components/course/list/courselist.component';
import { CourseviewComponent } from './components/course/view/courseview.component';
import { GuideviewComponent } from './components/guide/view/guideview.component';
import { CoursenewComponent } from './components/course/new/coursenew.component';
import { GuidenewComponent } from './components/guide/new/guidenew.component';

@NgModule({
  declarations: [
    AppComponent,
    CourselistComponent,
    CourseviewComponent,
    GuideviewComponent,
    CoursenewComponent,
    GuidenewComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
