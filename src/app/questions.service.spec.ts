import { TestBed } from '@angular/core/testing';

import { QuestionsService } from './questions.service';
import { HttpClientModule } from '@angular/common/http';

describe('QuestionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: QuestionsService = TestBed.get(QuestionsService);
    expect(service).toBeTruthy();
  });
});
