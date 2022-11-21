import { ComponentFixture, TestBed } from "@angular/core/testing";

import { CategoryMenuComponent } from "./category-menu.component";

describe("DevMenuComponent", () => {
  let component: CategoryMenuComponent;
  let fixture: ComponentFixture<CategoryMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoryMenuComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
