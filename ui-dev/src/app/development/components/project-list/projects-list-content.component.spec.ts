import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ProjectListContentComponent } from "./projects-list-content.component";

describe("ProjectListContentComponent", () => {
  let component: ProjectListContentComponent;
  let fixture: ComponentFixture<ProjectListContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectListContentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectListContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
