/*
  This component is used to provide a container for all the list of questions.
  It makes use of other components internally so as to support resuable components across the board
*/

import { Component, OnInit } from '@angular/core';

import { QuestionsService } from '../questions.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.less']
})
export class QuestionsComponent implements OnInit {


  questions: any;

  answers: any;

  constructor(private questionsService: QuestionsService) { }

  ngOnInit() {
    this.getQuestions();
  }
  getQuestions() {
    this.questionsService.getQuestions()
      .subscribe((questions: any) => {
        this.questions = questions.feed_questions;
        this.questionsService.getAnswers()
          .subscribe((answers: any) => {
            this.answers = answers.feed_answers.sort((a, b) => { // Sorting by most recent timestamp first
              return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
            });
            this.questions.map((question) => {
              question.answers = this.answers.filter((answer) => {
                return answer['Question-Id'] === question.Id; // Mapping answers by common Question Id
              });
            });
          });
    });
  }
}
