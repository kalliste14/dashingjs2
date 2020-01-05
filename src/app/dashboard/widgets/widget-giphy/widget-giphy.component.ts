import { Component, Input, OnInit } from '@angular/core';
import { GiphyImage } from './interfaces/giphy-image';
import { DashingJS2GridsterItem } from '../../interfaces/dashing-js2-gridster-item';
import { GiphyDataService } from './giphy-data.service';

@Component({
  selector: 'app-widget-giphy',
  template: '<small>&copy;Giphy</small>' + '<img *ngIf="image" [src]="image.url">',
  styleUrls: ['./widget-giphy.component.scss'],
  providers: [GiphyDataService]
})
export class WidgetGiphyComponent implements OnInit {
  public image: GiphyImage;

  private images: GiphyImage[];
  private currentImageIndex = 0;
  private timer: any = null;

  @Input() data: DashingJS2GridsterItem;

  constructor(private giphyDataService: GiphyDataService) {}

  private getImages() {
    this.giphyDataService.getImages(this.data.widget.params.q).subscribe(images => {
      this.images = images;

      if (null !== this.timer) {
        clearInterval(this.timer);
      }

      this.setImage();
      this.timer = setInterval(() => this.setImage(), 1000 * 15);
    });
  }

  // Récupérer l'index courant et passer à l'image suivante
  private setImage(): void {
    this.currentImageIndex = this.currentImageIndex + 1 > this.images.length ? 0 : this.currentImageIndex + 1;
    this.image = this.images[this.currentImageIndex];
    this.preloadImage();
  }

  /* Précharger l'image en avance dans le cache du navigateur afin de ne pas de retrouver avec un fond noir
  le temps que les images se chargent */
  private preloadImage(): void {
    const nextImageIndex = this.currentImageIndex + 1 > this.images.length ? 0 : this.currentImageIndex + 1;
    const image = new Image();
    image.src = this.images[nextImageIndex].url;
  }

  ngOnInit() {
    this.getImages();
  }
}
