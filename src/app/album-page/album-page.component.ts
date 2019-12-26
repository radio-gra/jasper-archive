import {Component, OnInit} from '@angular/core';
import {Album} from '../models/album.model';
import {AlbumService} from '../services/album.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-album-page',
  templateUrl: './album-page.component.html',
  styleUrls: ['./album-page.component.sass'],
})
export class AlbumPageComponent implements OnInit {
  public pageId: string;
  public album: Album;
  public loading: boolean = true;
  constructor(private route: ActivatedRoute, private albumService: AlbumService) {}

  public ngOnInit(): void {
    this.pageId = this.route.snapshot.paramMap.get('id');
    this.albumService.getAlbumById(this.pageId).subscribe((album: Album) => {
      this.album = album;
      this.loading = false;
    });
  }
}
