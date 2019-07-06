import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAnswerComponent } from './add-answer.component';
import { FormsModule } from '@angular/forms';


describe('AddAnswerComponent', () => {
  let component: AddAnswerComponent;
  let fixture: ComponentFixture<AddAnswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAnswerComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
