import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoopContextualVariablesComponent } from './loop-contextual-variables.component';

describe('LoopContextualVariablesComponent', () => {
  let component: LoopContextualVariablesComponent;
  let fixture: ComponentFixture<LoopContextualVariablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoopContextualVariablesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoopContextualVariablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
