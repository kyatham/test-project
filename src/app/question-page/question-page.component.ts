/*
  This component is used to provide a bookmarkable page for the question selected
  It is upto us to make this more extensible as needed by the user
*/

import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-question-page',
  templateUrl: './question-page.component.html',
  styleUrls: ['./question-page.component.less']
})
export class QuestionPageComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
  }

  id: string;

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = JSON.parse(params.id);
    });
  }

}
