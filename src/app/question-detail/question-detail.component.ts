/*
  This component is used to display all the details pertaining to a single question
*/

import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.less']
})
export class QuestionDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
  }

  @Input() question;

  ngOnInit() {
    if (!this.question) {
      this.route.params.subscribe(params => {
        this.question = JSON.parse(params.question);
      });
    }
  }

}
