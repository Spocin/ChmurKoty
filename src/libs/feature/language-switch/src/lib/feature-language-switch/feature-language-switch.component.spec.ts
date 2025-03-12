import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureLanguageSwitchComponent } from './feature-language-switch.component';

describe('FeatureLanguageSwitchComponent', () => {
  let component: FeatureLanguageSwitchComponent;
  let fixture: ComponentFixture<FeatureLanguageSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureLanguageSwitchComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureLanguageSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
