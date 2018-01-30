import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../../../models/course';
import { Guide } from '../../../models/guide';
import { CoursesService } from '../../../services/courses.service';

@Component({
  selector: 'app-courseview',
  templateUrl: './courseview.component.html',
  styleUrls: ['./courseview.component.css'],
  providers: [Course, Guide, CoursesService]
})
export class CourseviewComponent implements OnInit {
  private course: Course;
  private guides: Guide[];

  constructor(private router: Router, private route: ActivatedRoute, private coursesService: CoursesService) {
    this.guides = [];
  }

  ngOnInit() {
    this.coursesService.getCourse(this.route.snapshot.params['id']).then((data) => {
      this.course = new Course(data['_id'], data['name']);

      for (let guide of data['guides']) {
        this.guides.push(new Guide(guide._id, guide.title, guide.url, guide.duration, this.route.snapshot.params['id']));
      }
    });
  }

  viewDetails(id) {
    this.router.navigateByUrl(`/guide/view/${id}`);
  }

  createGuide() {
    this.router.navigateByUrl(`/guide/new/${this.route.snapshot.params['id']}`);
  }

}
