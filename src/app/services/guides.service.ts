import { Injectable } from '@angular/core';
import {HttpModule, Http, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class GuidesService {

  apiRoot: string = 'http://localhost:9090/guides';

  constructor(private http: Http) {}

  getGuide(id) {
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

  createGuide(data) {
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
