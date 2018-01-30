import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../../../models/course';
import { CoursesService } from '../../../services/courses.service';

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css'],
  providers: [Course, CoursesService]
})

export class CourselistComponent implements OnInit {
  private courses: Course[];

  constructor (private router: Router, private coursesService: CoursesService) {
    this.courses = [];
  }

  ngOnInit(){
    this.coursesService.getCourses().then((data) => {
      for (let course of Object.values(data)) {
        this.courses.push(new Course(course._id, course.name));
      }
    });
  }

  createCourse() {
    this.router.navigateByUrl(`/course/new`);
  }

  viewDetails(id) {
    this.router.navigateByUrl(`/course/view/${id}`);
  }

}
