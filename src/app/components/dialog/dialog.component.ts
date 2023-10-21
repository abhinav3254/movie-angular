import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {


  constructor(@Inject(MAT_DIALOG_DATA) public data: Root) { }

  ngOnInit() {
    // Access the passed data
    console.log('Received movie data:', this.data);
  }

}
export interface Root {
  movieData: MovieData
}

export interface MovieData {
  id: number
  title: string
  year: number
  cast: string[]
  genres: string[]
  href: string
  extract: string
  thumbnail: string
  thumbnailWidth: number
  thumbnailHeight: number
}


