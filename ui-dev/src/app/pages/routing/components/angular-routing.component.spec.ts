import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularRoutingComponent } from './angular-routing.component';

describe('AngularRoutingComponent', () => {
  let component: AngularRoutingComponent;
  let fixture: ComponentFixture<AngularRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularRoutingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
