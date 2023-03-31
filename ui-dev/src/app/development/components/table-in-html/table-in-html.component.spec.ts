import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableInHTMLComponent } from './table-in-html.component';

describe('TableInHTMLComponent', () => {
  let component: TableInHTMLComponent;
  let fixture: ComponentFixture<TableInHTMLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableInHTMLComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TableInHTMLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
