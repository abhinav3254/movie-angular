import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { PageEvent } from '@angular/material/paginator';
import { DatasharingserviceService } from './datasharingservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies: Root | undefined;
  length: any;

  searchText: string = '';

  constructor(private homeService: HomeService, public dialog: MatDialog, private dataSharingService: DatasharingserviceService) { }

  ngOnInit(): void {
    this.homeService.getMovies(0, 20).subscribe(
      (data) => {
        this.movies = data as Root;
        // Set the 'length' property to 'pagesize_api' after data loads.
        this.length = this.movies.totalElements;
      }
    );
    // for search bar
    // Subscribe to changes in the search text
    this.dataSharingService.searchText$.subscribe((text) => {
      this.searchText = text;
      // console.log('from home search will be :- ' + this.searchText)
      this.homeService.searchMovie(this.searchText, 0, 20).subscribe(
        (data) => {
          this.movies = data as Root;
          // Set the 'length' property to 'pagesize_api' after data loads.
          this.length = this.movies.totalElements;
        }
      )
    });
  }

  pageIndex = 0;
  pageSize = 20;


  onPageChange(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.homeService.getMovies(this.pageIndex, 20).subscribe(
      (data) => {
        this.movies = data as Root;
      }
    );
    // You can also implement any logic here based on the new pageIndex.
  }

  onPageSizeChange(event: any) {
    this.pageSize = event.pageSize;
    console.log(this.pageSize);
    // You can also implement any logic here based on the new pageSize.
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
