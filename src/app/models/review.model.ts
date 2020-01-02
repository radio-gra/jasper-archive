import {User} from './user.model';
import {Album} from './album.model';

export class Review {
  public _id: string;
  public user: User;
  public album: Album;
  public title: string;
  public body: string;
  public reviewDate: Date;
  public trending: boolean;
  public trendingDate: Date;
}
