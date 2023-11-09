import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackButtonNavigationComponent } from './back-button-navigation.component';

describe('BackButtonNavigationComponent', () => {
  let component: BackButtonNavigationComponent;
  let fixture: ComponentFixture<BackButtonNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackButtonNavigationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackButtonNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
