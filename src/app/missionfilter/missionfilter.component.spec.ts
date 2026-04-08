import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MissionfilterComponent } from './missionfilter.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MissionfilterComponent', () => {
  let component: MissionfilterComponent;
  let fixture: ComponentFixture<MissionfilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MissionfilterComponent, HttpClientTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(MissionfilterComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
