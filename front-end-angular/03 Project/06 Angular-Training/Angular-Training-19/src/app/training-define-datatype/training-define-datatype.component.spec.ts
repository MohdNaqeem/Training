import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingDefineDatatypeComponent } from './training-define-datatype.component';

describe('TrainingDefineDatatypeComponent', () => {
  let component: TrainingDefineDatatypeComponent;
  let fixture: ComponentFixture<TrainingDefineDatatypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainingDefineDatatypeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrainingDefineDatatypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
