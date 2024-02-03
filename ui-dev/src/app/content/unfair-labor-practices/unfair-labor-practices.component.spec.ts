import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnfairLaborPracticesComponent } from './unfair-labor-practices.component';

describe('UnfairLaborPracticesComponent', () => {
  let component: UnfairLaborPracticesComponent;
  let fixture: ComponentFixture<UnfairLaborPracticesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnfairLaborPracticesComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnfairLaborPracticesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
