import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppsWrapperComponent } from './apps-wrapper.component';

describe('AppsWrapperComponent', () => {
  let component: AppsWrapperComponent;
  let fixture: ComponentFixture<AppsWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppsWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
