import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CornerstoneAppsComponent } from './cornerstone-apps.component';

describe('CornerstoneAppsComponent', () => {
  let component: CornerstoneAppsComponent;
  let fixture: ComponentFixture<CornerstoneAppsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CornerstoneAppsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CornerstoneAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
