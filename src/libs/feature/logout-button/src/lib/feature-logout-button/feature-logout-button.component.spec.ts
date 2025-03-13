import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureLogoutButtonComponent } from './feature-logout-button.component';

describe('FeatureLogoutButtonComponent', () => {
  let component: FeatureLogoutButtonComponent;
  let fixture: ComponentFixture<FeatureLogoutButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureLogoutButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureLogoutButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
