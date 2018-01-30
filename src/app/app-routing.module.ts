import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourselistComponent } from './components/course/list/courselist.component';
import { CourseviewComponent } from './components/course/view/courseview.component';
import { CoursenewComponent } from './components/course/new/coursenew.component';
import { GuideviewComponent } from './components/guide/view/guideview.component';
import { GuidenewComponent } from './components/guide/new/guidenew.component';

const routes: Routes = [
  {
    path: '',
    component: CourselistComponent
  },
  {
    path: 'course',
    children: [
      { path: 'new', component: CoursenewComponent },
      { path: 'view/:id', component: CourseviewComponent }
    ]
  },
  {
    path: 'guide',
    children: [
      { path: 'new/:id', component: GuidenewComponent },
      { path: 'view/:id', component: GuideviewComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
