import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies: Movie[] = [];

  constructor(private homeService: HomeService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.homeService.getMovies().subscribe(
      (data) => {
        this.movies = data as Movie[];
      }
    );
  }

  openDialog(movie: Movie) {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: { movieData: movie } // Pass your movie data here
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}



export interface Movie {
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

