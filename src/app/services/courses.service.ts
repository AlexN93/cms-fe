import { Injectable } from '@angular/core';
import {HttpModule, Http, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CoursesService {

  apiRoot: string = 'http://localhost:9090/courses';

  constructor(private http: Http) {}

  getCourses() {
    let promise = new Promise((resolve, reject) => {
      this.http.get(this.apiRoot)
        .toPromise()
        .then(
          res => {
            resolve(res.json());
          },
          msg => {
            reject();
          }
        );
    });
    return promise;
  }

  getCourse(id) {
    let promise = new Promise((resolve, reject) => {
      this.http.get(`${this.apiRoot}/${id}`)
        .toPromise()
        .then(
          res => {
            resolve(res.json());
          },
          msg => {
            reject();
          }
        );
    });
    return promise;
  }

  createCourse(data) {
    let promise = new Promise((resolve, reject) => {
      this.http.post(`${this.apiRoot}`, data)
        .toPromise()
        .then(
          res => {
            resolve(res.json());
          },
          msg => {
            reject();
          }
        );
    });
    return promise;
  }
}
