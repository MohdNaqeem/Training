import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EffectSignalComponent } from './effect-signal.component';

describe('EffectSignalComponent', () => {
  let component: EffectSignalComponent;
  let fixture: ComponentFixture<EffectSignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EffectSignalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EffectSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
