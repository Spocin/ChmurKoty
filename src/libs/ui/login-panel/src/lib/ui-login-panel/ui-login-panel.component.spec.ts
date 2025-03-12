import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiLoginPanelComponent } from './ui-login-panel.component';

describe('UiLoginPanelComponent', () => {
  let component: UiLoginPanelComponent;
  let fixture: ComponentFixture<UiLoginPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiLoginPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiLoginPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
