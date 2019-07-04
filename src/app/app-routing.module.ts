import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionPageComponent } from './question-page/question-page.component';


const routes: Routes = [
  { path: '', redirectTo: '/questions', pathMatch: 'full'},
  { path: 'questions', component: QuestionsComponent },
  { path: 'detail', component: QuestionPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
