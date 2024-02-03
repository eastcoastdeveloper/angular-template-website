import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedComponentsComponent } from './related-components.component';

describe('RelatedComponentsComponent', () => {
  let component: RelatedComponentsComponent;
  let fixture: ComponentFixture<RelatedComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RelatedComponentsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(RelatedComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
