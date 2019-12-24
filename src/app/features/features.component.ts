import {Component, OnInit} from '@angular/core';
import {Artist} from '../models/artist.model';
import {Album} from '../models/album.model';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.sass'],
})
export class FeaturesComponent {
  public artists: Artist[] = [
    {
      id: '973h87f34h98fh',
      name: 'Unwound',
      year: 1993,
      genres: ['post-hardcore'],
      albums: [],
      trending: true,
      trendingDate: new Date(1576874524000),
      imageUrl: '2a7f00a1f8e0ab37c647600f6abff67e.jpg',
    },
    {
      id: 'uhf7hwe8fh8h',
      name: 'Depeche Mode',
      year: 1980,
      genres: ['synthpop'],
      albums: [],
      trending: true,
      trendingDate: new Date(1576874565000),
      imageUrl: 'e5328919dac971af86dd034781a2da71.jpg',
    },
    {
      id: 'f7hrefh4hf',
      name: 'Ladytron',
      year: 1999,
      genres: ['synthpop', 'electroclash'],
      albums: [],
      trending: true,
      trendingDate: new Date(1576874324000),
      imageUrl: 'f26cc1ae1fef371793622bd199b4bb52.jpg',
    },
    {
      id: '973h87f34h98fh',
      name: 'Unwound',
      year: 1993,
      genres: ['post-hardcore'],
      albums: [],
      trending: true,
      trendingDate: new Date(1576874524000),
      imageUrl: '2a7f00a1f8e0ab37c647600f6abff67e.jpg',
    },
    {
      id: 'uhf7hwe8fh8h',
      name: 'Depeche Mode',
      year: 1980,
      genres: ['synthpop'],
      albums: [],
      trending: true,
      trendingDate: new Date(1576874565000),
      imageUrl: 'e5328919dac971af86dd034781a2da71.jpg',
    },
    {
      id: 'f7hrefh4hf',
      name: 'Ladytron',
      year: 1999,
      genres: ['synthpop', 'electroclash'],
      albums: [],
      trending: true,
      trendingDate: new Date(1576874324000),
      imageUrl: 'f26cc1ae1fef371793622bd199b4bb52.jpg',
    },
  ];
  public albums: Album[] = [
    {
      id: 't67gf8d576f785',
      name: 'Fake Train',
      year: 1993,
      genres: ['post-hardcore'],
      artist: this.artists[0],
      ratings: [],
      reviews: [],
      avgRating: 8.43,
      avgRatingCalcDate: new Date(),
      trending: true,
      trendingDate: new Date(),
      imageUrl: '9010b6f4b16ec3443334db5eac191b1e.jpg',
    },
    {
      id: 't67gf8d576f785',
      name: 'Gravity The Seducer',
      year: 2011,
      genres: ['dream pop'],
      artist: this.artists[2],
      ratings: [],
      reviews: [],
      avgRating: 7.45,
      avgRatingCalcDate: new Date(),
      trending: true,
      trendingDate: new Date(),
      imageUrl: '466a95d7d51abf64eb4c558d455c6c1b.jpg',
    },
    {
      id: 't67gf8d576f785',
      name: 'The Queen Is Dead',
      year: 1986,
      genres: ['post-punk', 'jangle pop'],
      artist: this.artists[1],
      ratings: [],
      reviews: [],
      avgRating: 9.12,
      avgRatingCalcDate: new Date(),
      trending: true,
      trendingDate: new Date(),
      imageUrl: '1238ab73eb544242e50d9c915d6a200c.jpg',
    },
    {
      id: 't67gf8d576f785',
      name: 'Fake Train',
      year: 1993,
      genres: ['post-hardcore'],
      artist: this.artists[0],
      ratings: [],
      reviews: [],
      avgRating: 8.43,
      avgRatingCalcDate: new Date(),
      trending: true,
      trendingDate: new Date(),
      imageUrl: '9010b6f4b16ec3443334db5eac191b1e.jpg',
    },
    {
      id: 't67gf8d576f785',
      name: 'Gravity The Seducer',
      year: 2011,
      genres: ['dream pop'],
      artist: this.artists[2],
      ratings: [],
      reviews: [],
      avgRating: 7.45,
      avgRatingCalcDate: new Date(),
      trending: true,
      trendingDate: new Date(),
      imageUrl: '466a95d7d51abf64eb4c558d455c6c1b.jpg',
    },
    {
      id: 't67gf8d576f785',
      name: 'The Queen Is Dead',
      year: 1986,
      genres: ['post-punk', 'jangle pop'],
      artist: this.artists[1],
      ratings: [],
      reviews: [],
      avgRating: 9.12,
      avgRatingCalcDate: new Date(),
      trending: true,
      trendingDate: new Date(),
      imageUrl: '1238ab73eb544242e50d9c915d6a200c.jpg',
    },
  ];
  public reviews: any[] = [
    {
      author: 'fae',
      body:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ' +
        'Aenean commodo ligula eget dolor. Aenean massa.\n' +
        '\n' +
        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n' +
        '\n' +
        'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. ' +
        'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a ',
    },
    {
      author: 'comicallyStupid',
      body:
        'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was ' +
        'born and I will give you a complete account of the system, and expound the actual teachings of ' +
        'the great explorer of the truth, the master-builder of human happiness.\n' +
        '\n' +
        'No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those ' +
        'who do not know how to pursue pleasure r',
    },
    {
      author: 'fae',
      body:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ' +
        'Aenean commodo ligula eget dolor. Aenean massa.\n' +
        '\n' +
        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n' +
        '\n' +
        'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. ' +
        'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a ',
    },
    {
      author: 'comicallyStupid',
      body:
        'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was ' +
        'born and I will give you a complete account of the system, and expound the actual teachings of ' +
        'the great explorer of the truth, the master-builder of human happiness.\n' +
        '\n' +
        'No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those ' +
        'who do not know how to pursue pleasure r',
    },
    {
      author: 'fae',
      body:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ' +
        'Aenean commodo ligula eget dolor. Aenean massa.\n' +
        '\n' +
        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n' +
        '\n' +
        'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. ' +
        'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a ',
    },
    {
      author: 'comicallyStupid',
      body:
        'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was ' +
        'born and I will give you a complete account of the system, and expound the actual teachings of ' +
        'the great explorer of the truth, the master-builder of human happiness.\n' +
        '\n' +
        'No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those ' +
        'who do not know how to pursue pleasure r',
    },
  ];
  constructor() {}
}
