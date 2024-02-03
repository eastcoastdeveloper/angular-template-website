import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharitableSolicitations } from './charitable-solicitations.component';

describe('CharitableSolicitations', () => {
  let component: CharitableSolicitations;
  let fixture: ComponentFixture<CharitableSolicitations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharitableSolicitations]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharitableSolicitations);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
