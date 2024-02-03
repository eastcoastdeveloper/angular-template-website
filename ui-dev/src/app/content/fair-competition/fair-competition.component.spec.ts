import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FairCompetitionComponent } from './fair-competition.component';

describe('FairCompetitionComponent', () => {
  let component: FairCompetitionComponent;
  let fixture: ComponentFixture<FairCompetitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FairCompetitionComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FairCompetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
