import { TestBed } from "@angular/core/testing";

import { ProjectListService } from "./project-list.service";

describe("ProjectListService", () => {
  let service: ProjectListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectListService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
