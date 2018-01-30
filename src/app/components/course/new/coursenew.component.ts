import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../../../models/course';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { CoursesService } from '../../../services/courses.service';

@Component({
  selector: 'app-coursenew',
  templateUrl: './coursenew.component.html',
  styleUrls: ['./coursenew.component.css'],
  providers: [Course, CoursesService]
})
export class CoursenewComponent implements OnInit {
  private course: Course;
  private form: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder, private coursesService: CoursesService) {
    this.course = new Course(null, null);
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: [null, [Validators.required]]
    });
  }

  submitForm(){
    this.coursesService.createCourse(this.course).then((data) => {
      this.router.navigateByUrl(`/`);
    });
  }

}
