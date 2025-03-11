import { TestBed } from '@angular/core/testing';
import { FeatureHomePageComponent } from './feature-home-page.component';

describe('FeatureHomePageComponent', () => {
  let component: FeatureHomePageComponent;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [FeatureHomePageComponent],
    });

    TestBed.runInInjectionContext(() => {
      component = new FeatureHomePageComponent();
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
