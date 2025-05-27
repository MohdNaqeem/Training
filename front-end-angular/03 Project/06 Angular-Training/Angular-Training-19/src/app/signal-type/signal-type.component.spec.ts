import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalTypeComponent } from './signal-type.component';

describe('SignalTypeComponent', () => {
  let component: SignalTypeComponent;
  let fixture: ComponentFixture<SignalTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalTypeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignalTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
