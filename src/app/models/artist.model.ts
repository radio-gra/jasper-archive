export class Artist {
  public id: string;
  public name: string;
  public year: number;
  public genres: Array<string>;
  public trending: boolean;
  public trendingDate: Date;
  public imageUrl: string;
}
