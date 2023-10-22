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

  movies: Root | undefined;

  constructor(private homeService: HomeService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.homeService.getMovies(0, 20).subscribe(
      (data) => {
        this.movies = data as Root;
      }
    );
  }

  openDialog(movie: Content) {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: { movieData: movie } // Pass your movie data here
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}


export interface Root {
  content: Content[];
  pageable: Pageable;
  last: boolean;
  totalPages: number;
  totalElements: number;
  first: boolean;
  size: number;
  number: number;
  sort: Sort2;
  numberOfElements: number;
  empty: boolean;
}

export interface Content {
  id: number;
  title: string;
  year: number;
  cast: string;
  genres: string;
  href: string;
  extract: string;
  thumbnail: string;
  thumbnail_width: string;
  thumbnail_height: string;
}

export interface Pageable {
  sort: Sort;
  offset: number;
  pageNumber: number;
  pageSize: number;
  paged: boolean;
  unpaged: boolean;
}

export interface Sort {
  empty: boolean;
  unsorted: boolean;
  sorted: boolean;
}

export interface Sort2 {
  empty: boolean;
  unsorted: boolean;
  sorted: boolean;
}
