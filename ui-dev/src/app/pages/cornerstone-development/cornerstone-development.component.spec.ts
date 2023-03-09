import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CornerstoneDevelopmentComponent } from './cornerstone-development.component';

describe('CornerstoneDevelopmentComponent', () => {
  let component: CornerstoneDevelopmentComponent;
  let fixture: ComponentFixture<CornerstoneDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CornerstoneDevelopmentComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CornerstoneDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
