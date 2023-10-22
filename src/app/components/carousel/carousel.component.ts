import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  slides: any[] = new Array(3).fill({ id: -1, src: '', title: '', subtitle: '' });

  constructor() { }

  ngOnInit(): void {
    this.slides[0] = {
      src: 'https://c4.wallpaperflare.com/wallpaper/174/652/1014/movies-dancing-ryan-gosling-emma-stone-wallpaper-preview.jpg',
    };
    this.slides[1] = {

      src: 'https://c4.wallpaperflare.com/wallpaper/90/347/591/lockdown-in-transformers-4-age-of-extinction-wallpaper-preview.jpg',
    }
    this.slides[2] = {
      src: 'https://c4.wallpaperflare.com/wallpaper/429/275/747/spider-man-movies-the-amazing-spider-man-emma-stone-wallpaper-preview.jpg',
    }
  }

  onItemChange($event: any): void {
    console.log('Carousel onItemChange', $event);
  }
}

