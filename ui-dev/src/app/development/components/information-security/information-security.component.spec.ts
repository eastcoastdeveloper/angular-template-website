import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationSecurityComponent } from './information-security.component';

describe('InformationSecurityComponent', () => {
  let component: InformationSecurityComponent;
  let fixture: ComponentFixture<InformationSecurityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InformationSecurityComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(InformationSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
