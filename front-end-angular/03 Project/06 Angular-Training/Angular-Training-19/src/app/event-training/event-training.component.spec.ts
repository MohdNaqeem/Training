import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventTrainingComponent } from './event-training.component';

describe('EventTrainingComponent', () => {
  let component: EventTrainingComponent;
  let fixture: ComponentFixture<EventTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventTrainingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
