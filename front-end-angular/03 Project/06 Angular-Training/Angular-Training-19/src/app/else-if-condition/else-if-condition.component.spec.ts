import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElseIfConditionComponent } from './else-if-condition.component';

describe('ElseIfConditionComponent', () => {
  let component: ElseIfConditionComponent;
  let fixture: ComponentFixture<ElseIfConditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElseIfConditionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElseIfConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
