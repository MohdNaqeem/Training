import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchConditionComponent } from './switch-condition.component';

describe('SwitchConditionComponent', () => {
  let component: SwitchConditionComponent;
  let fixture: ComponentFixture<SwitchConditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchConditionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SwitchConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
