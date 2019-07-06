import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionPageComponent } from './question-page.component';
import { QuestionDetailComponent} from '../question-detail/question-detail.component';
import { VotesComponent } from '../votes/votes.component';
import { UserInfoComponent } from '../user-info/user-info.component';
import { AddAnswerComponent } from '../add-answer/add-answer.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('QuestionPageComponent', () => {
  let component: QuestionPageComponent;
  let fixture: ComponentFixture<QuestionPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        QuestionPageComponent,
        QuestionDetailComponent,
        VotesComponent,
        UserInfoComponent,
        AddAnswerComponent
       ],
       imports: [
        FormsModule,
        HttpClientModule,
        RouterTestingModule
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
