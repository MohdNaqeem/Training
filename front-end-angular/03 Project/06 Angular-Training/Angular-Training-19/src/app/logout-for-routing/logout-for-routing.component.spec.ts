import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutForRoutingComponent } from './logout-for-routing.component';

describe('LogoutForRoutingComponent', () => {
  let component: LogoutForRoutingComponent;
  let fixture: ComponentFixture<LogoutForRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoutForRoutingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogoutForRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
