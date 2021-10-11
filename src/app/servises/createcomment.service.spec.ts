import { TestBed } from '@angular/core/testing';

import { CreatecommentService } from './createcomment.service';

describe('CreatecommentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreatecommentService = TestBed.get(CreatecommentService);
    expect(service).toBeTruthy();
  });
});
