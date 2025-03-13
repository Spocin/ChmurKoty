import { TestBed } from '@angular/core/testing';
import { FeatureThemeSwitchComponent } from './feature-theme-switch.component';
import { MockProvider } from 'ng-mocks';
import { DataAccessThemesService } from '@chmur-koty/data-access-themes-service';

describe('FeatureThemeSwitchComponent', () => {
  let component: FeatureThemeSwitchComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FeatureThemeSwitchComponent],
      providers: [MockProvider(DataAccessThemesService)],
    });

    TestBed.runInInjectionContext(() => {
      component = new FeatureThemeSwitchComponent();
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
