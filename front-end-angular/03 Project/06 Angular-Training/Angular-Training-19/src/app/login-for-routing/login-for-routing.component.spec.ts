import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginForRoutingComponent } from './login-for-routing.component';

describe('LoginForRoutingComponent', () => {
  let component: LoginForRoutingComponent;
  let fixture: ComponentFixture<LoginForRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginForRoutingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginForRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
