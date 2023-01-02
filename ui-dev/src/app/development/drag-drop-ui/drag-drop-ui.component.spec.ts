import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragDropUiComponent } from './drag-drop-ui.component';

describe('DragDropUiComponent', () => {
  let component: DragDropUiComponent;
  let fixture: ComponentFixture<DragDropUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DragDropUiComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragDropUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
