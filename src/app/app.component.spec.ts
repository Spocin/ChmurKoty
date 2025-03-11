import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppComponent],
    });

    TestBed.runInInjectionContext(() => {
      component = new AppComponent();
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
