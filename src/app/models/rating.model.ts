import {User} from './user.model';
import {Album} from './album.model';

export class Rating {
  public _id: string;
  public user: User;
  public album: Album;
  public value: number;
  public ratingDate: Date;
}
