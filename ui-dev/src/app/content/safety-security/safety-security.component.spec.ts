import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetySecurityComponent } from './safety-security.component';

describe('SafetySecurityComponent', () => {
  let component: SafetySecurityComponent;
  let fixture: ComponentFixture<SafetySecurityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SafetySecurityComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SafetySecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
