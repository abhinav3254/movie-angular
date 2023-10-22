import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {

  casts: any[] = [];
  genres: any[] = [];


  constructor(@Inject(MAT_DIALOG_DATA) public data: Root) { }

  ngOnInit() {
    // Access the passed data
    const jsonString = this.data.movieData.cast;

    const cleanString = jsonString.slice(1, -1);
    const stringArray = cleanString.split('","');
    this.casts = stringArray;
    // console.log(stringArray.length);

    const jsonStringGenres = this.data.movieData.genres;
    const cleanStringGenres = jsonStringGenres.slice(1, -1);
    const stringArrayGenres = cleanStringGenres.split('","');

    this.genres = stringArrayGenres;

  }

}

export interface Root {
  movieData: MovieData
}

export interface MovieData {
  id: number
  title: string
  year: number
  cast: string
  genres: string
  href: string
  extract: string
  thumbnail: string
  thumbnailWidth: number
  thumbnailHeight: number
}


