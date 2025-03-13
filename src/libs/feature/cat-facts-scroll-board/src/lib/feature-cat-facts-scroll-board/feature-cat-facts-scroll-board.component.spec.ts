import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureCatFactsScrollBoardComponent } from './feature-cat-facts-scroll-board.component';

describe('FeatureCatFactsScrollBoardComponent', () => {
  let component: FeatureCatFactsScrollBoardComponent;
  let fixture: ComponentFixture<FeatureCatFactsScrollBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureCatFactsScrollBoardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureCatFactsScrollBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
