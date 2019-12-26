import {Album} from './album.model';

export class ArtistExtended {
  public _id: string;
  public name: string;
  public year: number;
  public genres: Array<string>;
  public trending: boolean;
  public trendingDate: Date;
  public imageUrl: string;
  public albums: Array<Album>;
}
