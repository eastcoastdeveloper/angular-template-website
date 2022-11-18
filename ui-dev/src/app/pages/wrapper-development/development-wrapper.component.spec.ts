import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopmentWrapper } from './development-wrapper.component';

describe('DevelopmentWrapper', () => {
  let component: DevelopmentWrapper;
  let fixture: ComponentFixture<DevelopmentWrapper>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevelopmentWrapper ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelopmentWrapper);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
