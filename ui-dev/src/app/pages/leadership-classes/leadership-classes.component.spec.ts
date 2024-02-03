import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadershipClassesComponent } from './leadership-classes.component';

describe('LeadershipClassesComponent', () => {
  let component: LeadershipClassesComponent;
  let fixture: ComponentFixture<LeadershipClassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeadershipClassesComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadershipClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
