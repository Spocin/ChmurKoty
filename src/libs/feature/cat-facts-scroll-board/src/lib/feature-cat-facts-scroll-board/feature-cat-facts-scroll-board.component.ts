import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  inject,
  makeStateKey,
  OnInit,
  PendingTasks,
  PLATFORM_ID,
  signal,
  TransferState,
  ViewChild,
} from '@angular/core';
import { CommonModule, isPlatformServer } from '@angular/common';
import { CatFactsService } from '@chmur-koty/data-access-cat-facts-service';
import { ScrollPanel } from 'primeng/scrollpanel';
import { CatFact, LazyCatFact } from '@chmur-koty/util-types';
import { APP_CONFIG } from '@chmur-koty/util-environment-config';
import { Panel } from 'primeng/panel';
import { PrimeTemplate } from 'primeng/api';

const FACTS_TRANSFER_STATE = makeStateKey<CatFact[]>('cat-facts');

@Component({
  selector: 'lib-feature-cat-facts-scroll-board',
  imports: [CommonModule, ScrollPanel, Panel, PrimeTemplate],
  templateUrl: './feature-cat-facts-scroll-board.component.html',
  styleUrl: './feature-cat-facts-scroll-board.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureCatFactsScrollBoardComponent implements OnInit, AfterViewInit {
  protected readonly catFactsService = inject(CatFactsService);
  private readonly transferState = inject(TransferState);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly appConfig = inject(APP_CONFIG);
  private readonly pendingTasks = inject(PendingTasks);

  protected readonly initialFacts$ = signal<CatFact[]>([]);
  protected readonly lazyFacts$ = signal<LazyCatFact[]>([]);

  private scrollTimeoutId?: ReturnType<typeof setTimeout>;

  @ViewChild('scrollPanel')
  public scrollPanel?: ScrollPanel;

  ngOnInit() {
    void this.loadInitialFacts();
  }

  private async loadInitialFacts() {
    if (this.transferState.hasKey(FACTS_TRANSFER_STATE)) {
      const serverLoadedFacts = this.transferState.get(FACTS_TRANSFER_STATE, []);
      this.initialFacts$.set(serverLoadedFacts);

      return;
    }

    if (isPlatformServer(this.platformId)) {
      const unstableLoadTask = this.pendingTasks.add();
      const initialFacts: Promise<string | undefined>[] = [];

      for (let i = 0; i < this.appConfig.numberOfInitialFactsToLoad; i++) {
        initialFacts.push(this.catFactsService.loadNewFact());
      }

      const res = await Promise.all(initialFacts);

      this.initialFacts$.set(res.map((res) => ({ description: res })));
      this.transferState.set(FACTS_TRANSFER_STATE, this.initialFacts$());
      unstableLoadTask();
    }
  }

  ngAfterViewInit() {
    this.createScrollListener();
  }

  private createScrollListener() {
    const scrollContent = this.scrollPanel?.contentViewChild?.nativeElement;
    scrollContent.addEventListener('scroll', this.handleScrollEvent);
  }

  private handleScrollEvent = (event: Event) => {
    clearTimeout(this.scrollTimeoutId);
    const target = event.target as HTMLElement;

    //Only trigger events 40px from bottom
    if (target.scrollTop + target.clientHeight >= target.scrollHeight - 40) {
      this.scrollTimeoutId = setTimeout(() => {
        this.loadMoreFacts();
      }, 100);
    }
  };

  private loadMoreFacts() {
    const newLazyFacts: LazyCatFact[] = [];
    for (let i = 0; i < this.appConfig.numberOfFactsToLoadOnScroll; i++) {
      newLazyFacts.push({
        description: this.catFactsService.loadNewFact().finally(() => this.scrollPanel?.refresh()),
      });
    }

    this.lazyFacts$.update((prev) => [...prev, ...newLazyFacts]);
  }
}
