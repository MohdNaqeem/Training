import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingCmpComponent } from './training-cmp.component';

describe('TrainingCmpComponent', () => {
  let component: TrainingCmpComponent;
  let fixture: ComponentFixture<TrainingCmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingCmpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
