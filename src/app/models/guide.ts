import { Injectable } from '@angular/core';

@Injectable()
export class Guide {
  constructor(public id: string,
              public title: string,
              public url: string,
              public duration: number,
              public course_id: string) {

  }
}
