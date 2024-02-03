import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoingBusinessGloballyComponent } from './doing-business-globally.component';

describe('DoingBusinessGloballyComponent', () => {
  let component: DoingBusinessGloballyComponent;
  let fixture: ComponentFixture<DoingBusinessGloballyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoingBusinessGloballyComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoingBusinessGloballyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
