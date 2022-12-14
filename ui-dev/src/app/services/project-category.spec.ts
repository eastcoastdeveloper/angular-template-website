import { TestBed } from "@angular/core/testing";

import { ProjectCategoryService } from "./project-category.service";

describe("ProjectCategoryService", () => {
  let service: ProjectCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectCategoryService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
