import { Injectable } from '@angular/core';

@Injectable()
export class Course {
  constructor(public id: string,
              public name: string) {

  }
}
