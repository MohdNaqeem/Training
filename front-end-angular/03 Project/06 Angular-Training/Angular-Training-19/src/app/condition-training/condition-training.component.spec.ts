import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionTrainingComponent } from './condition-training.component';

describe('ConditionTrainingComponent', () => {
  let component: ConditionTrainingComponent;
  let fixture: ComponentFixture<ConditionTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConditionTrainingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConditionTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
