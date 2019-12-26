import {Component, OnInit} from '@angular/core';
import {Artist} from '../models/artist.model';
import {Album} from '../models/album.model';
import {ArtistService} from '../services/artist.service';
import {AlbumService} from '../services/album.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.sass'],
})
export class FeaturesComponent implements OnInit {
  public loading: boolean = true;
  public artists: Artist[] = [];
  public albums: Album[] = [];
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
  ];
  constructor(private artistService: ArtistService, private albumService: AlbumService) {}

  public ngOnInit(): void {
    this.artistService.getTrendingArtists(3).subscribe((artists: Artist[]) => {
      this.artists = artists;
      this.albumService.getTrendingAlbums(3).subscribe((albums: Album[]) => {
        this.albums = albums;
        this.loading = false;
      });
    });
  }
}
