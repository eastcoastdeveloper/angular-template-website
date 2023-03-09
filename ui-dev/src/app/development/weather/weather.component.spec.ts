import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherComponent } from './weather.component';

describe('WeatherComponent', () => {
  let component: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;
  var foo = 0;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [WeatherComponent]
    }).compileComponents();
    console.log('----');
    console.log(this);
    console.log('before Each 1');
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    console.log('----');
    console.log('before Each 2');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    console.log('----');
    console.log('It 1');
  });
});
