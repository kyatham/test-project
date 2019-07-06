/*
  This component is used to provide a bookmarkable page for the question selected
  It is upto us to make this more extensible as needed by the user
*/

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { QuestionsService } from '../questions.service';


@Component({
  selector: 'app-question-page',
  templateUrl: './question-page.component.html',
  styleUrls: ['./question-page.component.less']
})
export class QuestionPageComponent implements OnInit {

  constructor(private route: ActivatedRoute, private questionsService: QuestionsService) {
  }

  id: string;

  question: any;

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = params.id;
      this.getQuestion();
    });
  }

  getQuestion() {
    this.questionsService.getQuestions()
      .subscribe((questions: any) => {
        this.question = questions.feed_questions.find((question) => { // Get the  question selected in context
          return question.Id === this.id;
        });
        this.questionsService.getAnswers()
          .subscribe((answers: any) => {
            const allAnswers = answers.feed_answers.sort((a, b) => { // Sorting by most recent timestamp first
              return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
            });
            this.question.answers = allAnswers.filter((answer) => {
              return answer['Question-Id'] === this.question.Id; //  Finding answers for current question in context
            });
          });
    });
  }

}
