import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormConfirmationComponent } from './form-confirmation.component';

describe('FormConfirmationComponent', () => {
  let component: FormConfirmationComponent;
  let fixture: ComponentFixture<FormConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormConfirmationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
