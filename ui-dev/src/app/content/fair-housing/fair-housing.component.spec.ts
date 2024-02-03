import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FairHousingComponent } from './table-in-html.component';

describe('FairHousingComponent', () => {
  let component: FairHousingComponent;
  let fixture: ComponentFixture<FairHousingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FairHousingComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(FairHousingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
