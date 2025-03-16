import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MeowfactsResponse } from '@chmur-koty/util-types';
import { MessageService } from 'primeng/api';
import { delay, firstValueFrom, map, Observable } from 'rxjs';
import { APP_CONFIG } from '@chmur-koty/util-environment-config';

@Injectable({
  providedIn: 'root',
})
export class CatFactsService {
  private readonly httpClient = inject(HttpClient);
  private readonly messageService = inject(MessageService);
  private readonly appConfig = inject(APP_CONFIG);

  public readonly loadedFacts = new Set<string>();

  public async loadNewFact() {
    try {
      //Keep fetching until distinct fact is found
      let fetchedFact: string;
      let retryCount = 0;
      do {
        if (retryCount >= this.appConfig.matchFactRetryCount) {
          throw new Error('Failed to load unique fact. Exceeded retry count');
        }

        fetchedFact = await firstValueFrom(this.fetchNewFact());
        retryCount += 1;
      } while (this.loadedFacts.has(fetchedFact));

      this.loadedFacts.add(fetchedFact);

      return fetchedFact;
    } catch (e) {
      console.error($localize`Failed to load new fact`, e);

      this.messageService.add({
        severity: 'error',
        summary: 'CatFactsService',
        detail: $localize`Failed to load new fact`,
      });

      return undefined;
    }
  }

  private fetchNewFact(): Observable<string> {
    return this.httpClient.get<MeowfactsResponse>('https://meowfacts.herokuapp.com/').pipe(
      map((res) => {
        const fact = res.data[0];

        if (!fact) {
          throw new Error('Response data is empty!');
        }

        return fact;
      }),
    );
  }
}
