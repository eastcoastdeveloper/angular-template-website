import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulesInAngularComponent } from './modules-in-angular.component';

describe('ModulesInAngularComponent', () => {
  let component: ModulesInAngularComponent;
  let fixture: ComponentFixture<ModulesInAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModulesInAngularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulesInAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
