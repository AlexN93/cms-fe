import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Guide } from '../../../models/guide';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { GuidesService } from '../../../services/guides.service';

@Component({
  selector: 'app-guidenew',
  templateUrl: './guidenew.component.html',
  styleUrls: ['./guidenew.component.css'],
  providers: [Guide, GuidesService]
})
export class GuidenewComponent implements OnInit {
  private guide: Guide;
  private form: FormGroup;

  constructor(private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder, private guidesService: GuidesService) {
    this.guide = new Guide(null, null, null, null, this.route.snapshot.params['id']);
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      title: [null, [Validators.required]],
      url: [null, [Validators.required]],
      duration: [null, [Validators.required]]
    });
  }

  submitForm(){
    this.guidesService.createGuide(this.guide).then((data) => {
      this.router.navigateByUrl(`/course/view/${this.guide.course_id}`);
    });
  }

}
