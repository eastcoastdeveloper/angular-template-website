import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePaginatedComponent } from './data-table.component';

describe('TablePaginatedComponent', () => {
  let component: TablePaginatedComponent;
  let fixture: ComponentFixture<TablePaginatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TablePaginatedComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePaginatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
