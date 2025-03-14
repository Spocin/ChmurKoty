import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CatFactsService {
  public readonly loadedFacts = new Set<string>(['test1', 'test2', 'test3']);
}
