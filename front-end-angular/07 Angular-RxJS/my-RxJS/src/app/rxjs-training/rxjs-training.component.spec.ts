import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsTrainingComponent } from './rxjs-training.component';

describe('RxjsTrainingComponent', () => {
  let component: RxjsTrainingComponent;
  let fixture: ComponentFixture<RxjsTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsTrainingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
