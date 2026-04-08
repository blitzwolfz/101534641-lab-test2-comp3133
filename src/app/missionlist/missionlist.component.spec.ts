import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MissionlistComponent } from './missionlist.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MissionlistComponent', () => {
  let component: MissionlistComponent;
  let fixture: ComponentFixture<MissionlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MissionlistComponent, HttpClientTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(MissionlistComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
