import {Component, OnInit} from '@angular/core';
import {AlbumService} from '../services/album.service';
import {Album} from '../models/album.model';

@Component({
  selector: 'app-chart-page',
  templateUrl: './chart-page.component.html',
  styleUrls: ['./chart-page.component.sass'],
})
export class ChartPageComponent implements OnInit {
  public chart: Album[] = [];
  constructor(private albumService: AlbumService) {}

  public ngOnInit(): void {
    this.albumService.getChart(10).subscribe((albums: Album[]) => {
      this.chart = albums;
    });
  }
}
