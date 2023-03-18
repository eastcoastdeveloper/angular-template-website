import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingInAngularComponent } from './routing-in-angular.component';

describe('RoutingInAngularComponent', () => {
  let component: RoutingInAngularComponent;
  let fixture: ComponentFixture<RoutingInAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoutingInAngularComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingInAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
