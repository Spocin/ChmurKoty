import {
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
import { CatFact } from '@chmur-koty/util-types';
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
export class FeatureCatFactsScrollBoardComponent implements OnInit {
  protected readonly catFactsService = inject(CatFactsService);
  private readonly transferState = inject(TransferState);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly appConfig = inject(APP_CONFIG);
  private readonly pendingTasks = inject(PendingTasks);

  protected readonly facts = signal<CatFact[]>([]);

  @ViewChild('scrollPanel')
  public scrollPanel?: ScrollPanel;

  ngOnInit() {
    void this.loadInitialFacts();
  }

  private async loadInitialFacts() {
    if (this.transferState.hasKey(FACTS_TRANSFER_STATE)) {
      const serverLoadedFacts = this.transferState.get(FACTS_TRANSFER_STATE, []);
      this.facts.set(serverLoadedFacts);

      return;
    }

    if (isPlatformServer(this.platformId)) {
      const unstableLoadTask = this.pendingTasks.add();
      const initialFacts: Promise<string | undefined>[] = [];

      for (let i = 0; i < this.appConfig.numberOfInitialFactsToLoad; i++) {
        initialFacts.push(this.catFactsService.loadNewFact());
      }

      const res = await Promise.all(initialFacts);

      this.facts.set(res.map((res) => ({ description: res })));
      this.transferState.set(FACTS_TRANSFER_STATE, this.facts());
      unstableLoadTask();
    }
  }

  /*ngAfterViewInit() {
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
      //this.facts.update((prev) => [...prev, `${new Date()}`]);
      this.isLoading.set(false);

      this.scrollPanel?.refresh();
    }, 1000);
  }*/
}
