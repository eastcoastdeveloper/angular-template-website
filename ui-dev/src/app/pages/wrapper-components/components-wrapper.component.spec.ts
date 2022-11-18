import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsWrapperComponent } from './components-wrapper.component';

describe('ComponentsWrapperComponent', () => {
  let component: ComponentsWrapperComponent;
  let fixture: ComponentFixture<ComponentsWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentsWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
