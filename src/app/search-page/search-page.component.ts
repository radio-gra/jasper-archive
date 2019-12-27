import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {AlbumService} from '../services/album.service';
import {Album} from '../models/album.model';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.sass'],
})
export class SearchPageComponent implements OnInit {
  public searchQuery: FormControl;
  public searchType: FormControl;
  public searchResults: Album[] = [];

  public loading: boolean = false;

  constructor(private albumService: AlbumService) {
    this.searchQuery = new FormControl('');
    this.searchType = new FormControl('name');
  }

  public ngOnInit(): void {}

  public search(): void {
    this.loading = true;
    this.searchResults = [];
    this.albumService.searchAlbum(this.searchQuery.value, this.searchType.value).subscribe((albums: Album[]) => {
      this.searchResults = albums;
      this.loading = false;
    });
  }
}
