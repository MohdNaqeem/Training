import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularTrainingComponentComponent } from './angular-training-component.component';

describe('AngularTrainingComponentComponent', () => {
  let component: AngularTrainingComponentComponent;
  let fixture: ComponentFixture<AngularTrainingComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularTrainingComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularTrainingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
