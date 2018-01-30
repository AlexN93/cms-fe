import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Guide } from '../../../models/guide';
import { GuidesService } from '../../../services/guides.service';
@Component({
  selector: 'app-guideview',
  templateUrl: './guideview.component.html',
  styleUrls: ['./guideview.component.css'],
  providers: [Guide, GuidesService]
})

export class GuideviewComponent implements OnInit {
  private guide: Guide;

  constructor(private router: Router, private route: ActivatedRoute, private guidesService: GuidesService) { }

  ngOnInit() {
    this.guidesService.getGuide(this.route.snapshot.params['id']).then((data) => {
      this.guide = new Guide(data['_id'], data['title'], data['url'], data['duration'], null);

      console.log(this.guide);
    });
  }

}
