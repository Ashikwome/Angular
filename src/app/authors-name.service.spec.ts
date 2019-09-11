import { TestBed } from '@angular/core/testing';

import { AuthorsNameService } from './authors-name.service';

describe('AuthorsNameService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthorsNameService = TestBed.get(AuthorsNameService);
    expect(service).toBeTruthy();
  });
});
