/*
  This component is used to provide the functionality for adding new answers to the exisiting question
  It helps the user add new answers to the current list whilst updating the list dynamically.
  */

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-add-answer',
  templateUrl: './add-answer.component.html',
  styleUrls: ['./add-answer.component.less']
})
export class AddAnswerComponent implements OnInit {

  constructor() { }

  currentAnswer = '';

  @Input() answers;

  ngOnInit() {
  }

  addAnswer(event: any) {
    if (this.currentAnswer.trim().length === 0) {
      alert('Please enter an answer in the textbox !');
      return;
    }
    const answer = {
      Answer: this.currentAnswer,
      upvotes: 0,
      downvotes: 0,
      created_by: {
        Name: 'Anonymous',
        Avatar: null
      }
    };
    this.answers.unshift(answer); // Adding current answer to the top of the list as it is most recent

    this.currentAnswer = ''; // Resetting the input text box to empty
  }

}
