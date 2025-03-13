import { TestBed } from '@angular/core/testing';
import { FeatureHomePageComponent } from './feature-home-page.component';
import { MockProvider } from 'ng-mocks';
import { DataAccessThemesService } from '@chmur-koty/data-access-themes-service';

describe('FeatureHomePageComponent', () => {
  let component: FeatureHomePageComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FeatureHomePageComponent],
      providers: [MockProvider(DataAccessThemesService)],
    });

    TestBed.runInInjectionContext(() => {
      component = new FeatureHomePageComponent();
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
