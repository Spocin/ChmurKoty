export interface CatFact {
  description: string | undefined;
}

export interface LazyCatFact {
  description: Promise<string | undefined>;
}
