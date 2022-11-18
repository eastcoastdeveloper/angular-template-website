import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsTabsComponent } from './js-tabs.component';

describe('JsTabsComponent', () => {
  let component: JsTabsComponent;
  let fixture: ComponentFixture<JsTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
