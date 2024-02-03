import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndOfPostComponent } from './end-of-post.component';

describe('EndOfPostComponent', () => {
  let component: EndOfPostComponent;
  let fixture: ComponentFixture<EndOfPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndOfPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EndOfPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
