import { TestBed } from '@angular/core/testing';
import { UiLoginPanelComponent } from './ui-login-panel.component';

describe('UiLoginPanelComponent', () => {
  let component: UiLoginPanelComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [UiLoginPanelComponent],
    });

    TestBed.runInInjectionContext(() => {
      component = new UiLoginPanelComponent();
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
