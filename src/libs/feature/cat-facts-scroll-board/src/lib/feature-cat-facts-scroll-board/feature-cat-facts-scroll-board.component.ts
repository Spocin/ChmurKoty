import { AfterViewInit, ChangeDetectionStrategy, Component, inject, signal, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatFactsService } from '@chmur-koty/data-access-cat-facts-service';
import { ScrollPanel } from 'primeng/scrollpanel';

@Component({
  selector: 'lib-feature-cat-facts-scroll-board',
  imports: [CommonModule, ScrollPanel],
  templateUrl: './feature-cat-facts-scroll-board.component.html',
  styleUrl: './feature-cat-facts-scroll-board.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureCatFactsScrollBoardComponent implements AfterViewInit {
  protected readonly catFactsService = inject(CatFactsService);

  protected readonly isLoading = signal(false);
  protected readonly facts = signal<string[]>([...this.catFactsService.loadedFacts]);

  @ViewChild('scrollPanel')
  public scrollPanel?: ScrollPanel;

  ngAfterViewInit() {
    const scrollContent = this.scrollPanel?.contentViewChild?.nativeElement;

    scrollContent.addEventListener('scrollend', this.onScroll);
  }

  private onScroll = (event: Event) => {
    const target = event.target as HTMLElement;

    if (target.scrollTop + target.clientHeight >= target.scrollHeight - 40) {
      this.loadMore();
    }
  };

  private loadMore() {
    if (this.isLoading()) {
      return;
    }

    this.isLoading.set(true);

    setTimeout(() => {
      console.log('ADDED');
      this.facts.update((prev) => [...prev, `${new Date()}`]);
      this.isLoading.set(false);

      this.scrollPanel?.refresh();
    }, 1000);
  }
}
