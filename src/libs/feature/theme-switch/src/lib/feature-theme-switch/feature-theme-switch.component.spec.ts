import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureThemeSwitchComponent } from './feature-theme-switch.component';

describe('FeatureThemeSwitchComponent', () => {
  let component: FeatureThemeSwitchComponent;
  let fixture: ComponentFixture<FeatureThemeSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureThemeSwitchComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureThemeSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
