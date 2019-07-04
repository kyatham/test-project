/*
  This service is used to fetch the data for questions ans answers respectively from the given endpoints
  Any component can access the latest data by injecting this service
*/

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class QuestionsService {

  constructor(private http: HttpClient) { }

  questionsUrl = 'https://api.myjson.com/bins/dck5b';
  answersUrl = 'https://api.myjson.com/bins/hildr';

  getQuestions() {
    return this.http.get(this.questionsUrl);
  }
  getAnswers() {
    return this.http.get(this.answersUrl);
  }

}
