import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataPrivacySecurityComponent } from './data-privacy-security.component';

describe('DataPrivacySecurityComponent', () => {
  let component: DataPrivacySecurityComponent;
  let fixture: ComponentFixture<DataPrivacySecurityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DataPrivacySecurityComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataPrivacySecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
