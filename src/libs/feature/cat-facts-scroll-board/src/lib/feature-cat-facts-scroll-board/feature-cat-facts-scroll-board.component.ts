import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-feature-cat-facts-scroll-board',
  imports: [CommonModule],
  templateUrl: './feature-cat-facts-scroll-board.component.html',
  styleUrl: './feature-cat-facts-scroll-board.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureCatFactsScrollBoardComponent {}
