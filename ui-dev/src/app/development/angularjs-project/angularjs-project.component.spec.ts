import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularjsProjectComponent } from './angularjs-project.component';

describe('AngularjsProjectComponent', () => {
  let component: AngularjsProjectComponent;
  let fixture: ComponentFixture<AngularjsProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularjsProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularjsProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
