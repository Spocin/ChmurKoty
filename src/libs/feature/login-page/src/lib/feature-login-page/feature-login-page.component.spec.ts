import { TestBed } from '@angular/core/testing';
import { FeatureLoginPageComponent } from './feature-login-page.component';

describe('FeatureLoginPageComponent', () => {
  let component: FeatureLoginPageComponent;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [FeatureLoginPageComponent],
    });

    TestBed.runInInjectionContext(() => {
      component = new FeatureLoginPageComponent();
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
