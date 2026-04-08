import { TestBed } from '@angular/core/testing';
import { SpacexapiService } from './spacexapi.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SpacexapiService', () => {
  let service: SpacexapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(SpacexapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
