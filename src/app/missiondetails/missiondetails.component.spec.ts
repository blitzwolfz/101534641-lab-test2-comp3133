import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MissiondetailsComponent } from './missiondetails.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('MissiondetailsComponent', () => {
  let component: MissiondetailsComponent;
  let fixture: ComponentFixture<MissiondetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MissiondetailsComponent, HttpClientTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => '1'
              }
            }
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(MissiondetailsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
