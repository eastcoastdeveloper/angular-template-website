import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { AppComponent } from './app.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

// Define a group of related tests
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
    declarations: [AppComponent],
    imports: [RouterTestingModule],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
}).compileComponents();
  }));

  // It: Individual Tests
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'frontend-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
  });
});
