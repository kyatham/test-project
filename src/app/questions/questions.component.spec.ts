import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsComponent } from './questions.component';
import { RouterTestingModule } from '@angular/router/testing';
import { QuestionDetailComponent} from '../question-detail/question-detail.component';
import { VotesComponent } from '../votes/votes.component';
import { QuestionPageComponent } from '../question-page/question-page.component';
import { UserInfoComponent } from '../user-info/user-info.component';
import { AddAnswerComponent } from '../add-answer/add-answer.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('QuestionsComponent', () => {
  let component: QuestionsComponent;
  let fixture: ComponentFixture<QuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        QuestionsComponent,
        QuestionDetailComponent,
        VotesComponent,
        QuestionPageComponent,
        UserInfoComponent,
        AddAnswerComponent
      ],
      imports: [
        RouterTestingModule,
        FormsModule,
        HttpClientModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
