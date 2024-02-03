import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EthicalSalePracticesComponent } from './ethical-sales-practices.component';

describe('EthicalSalePracticesComponent', () => {
  let component: EthicalSalePracticesComponent;
  let fixture: ComponentFixture<EthicalSalePracticesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EthicalSalePracticesComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    fixture = TestBed.createComponent(EthicalSalePracticesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('MovieApp should create', () => {
    expect(component).toBeTruthy();
  });
});
