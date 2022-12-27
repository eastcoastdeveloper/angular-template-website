import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ProjectsListContentComponent } from "./projects-list-content.component";

describe("ProjectsListContentComponent", () => {
  let component: ProjectsListContentComponent;
  let fixture: ComponentFixture<ProjectsListContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectsListContentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectsListContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
