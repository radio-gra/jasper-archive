import {Component, OnInit} from '@angular/core';
import {Artist} from '../models/artist.model';

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

  constructor() {}
}
