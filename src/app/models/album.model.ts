import {Artist} from './artist.model';

export class Album {
  public id: string;
  public name: string;
  public year: number;
  public genres: Array<string>;
  public artist: Artist;
  public ratings: Array<any>;
  public reviews: Array<any>;
  public avgRating: number;
  public avgRatingCalcDate: Date;
  public trending: boolean;
  public trendingDate: Date;
  public imageUrl: string;
}
