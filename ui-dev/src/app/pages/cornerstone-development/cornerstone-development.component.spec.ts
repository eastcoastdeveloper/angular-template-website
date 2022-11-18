import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CornerstoneComponentsComponent } from './cornerstone-components.component';

describe('CornerstoneComponentsComponent', () => {
  let component: CornerstoneComponentsComponent;
  let fixture: ComponentFixture<CornerstoneComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CornerstoneComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CornerstoneComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
