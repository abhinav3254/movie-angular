import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { PageEvent } from '@angular/material/paginator';
import { DatasharingserviceService } from './datasharingservice.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // --------------- For sorting with year

  // for year check box
  yearsBoot = [
    { year: '2020', selected: false },
    { year: '2021', selected: false },
    { year: '2022', selected: false },
    { year: '2023', selected: false },
  ];
  clickedRadioBootStrap(selectedYear: any) {
    // Toggle the selected state for the clicked checkbox
    selectedYear.selected = selectedYear.selected;

    // Unselect all other checkboxes except the clicked one
    for (const year of this.yearsBoot) {
      if (year !== selectedYear) {
        year.selected = false;
      }
    }

    // If the clicked checkbox is now unselected, reset the selection
    if (!selectedYear.selected) {
      selectedYear = null;
    }

    console.log(`Selected year: ${selectedYear ? selectedYear.year : 'None'}`);

    if (selectedYear) {
      // alert(`Selected year: ${selectedYear.year}`);
      this.getMovieByYear(selectedYear.year);
    } else {
      this.getAllMovies();
    }
  }


  // ------------- For generes sorting

  // for generes


  movieGenresList = [
    { genre: 'Action', selected: false },
    { genre: 'Adventure', selected: false },
    { genre: 'Animation', selected: false },
    { genre: 'Comedy', selected: false },
    { genre: 'Crime', selected: false },
    { genre: 'Drama', selected: false },
    { genre: 'Fantasy', selected: false },
    { genre: 'Horror', selected: false },
    { genre: 'Mystery', selected: false },
    { genre: 'Romance', selected: false },
    { genre: 'Science Fiction', selected: false },
    { genre: 'Thriller', selected: false },
    { genre: 'Family', selected: false },
    { genre: 'Western', selected: false },
    { genre: 'Historical', selected: false },
    { genre: 'War', selected: false },
    { genre: 'Music', selected: false },
    { genre: 'Documentary', selected: false },
    { genre: 'Superhero', selected: false },
    { genre: 'Fantasy Adventure', selected: false },
    { genre: 'Musical', selected: false },
    { genre: 'Biography', selected: false },
    { genre: 'Sport', selected: false },
    { genre: 'Sci-Fi', selected: false },
    { genre: 'Western', selected: false },
    { genre: 'Action-Adventure', selected: false },
    { genre: 'Fantasy-Comedy', selected: false },
    { genre: 'Crime-Drama', selected: false },
    { genre: 'Historical-War', selected: false },
    { genre: 'Romantic Comedy', selected: false },
  ];

  clickedRadioGenres(selectedGenre: any) {
    // Toggle the selected state for the clicked radio button
    selectedGenre.selected = selectedGenre.selected;

    // Unselect all other radio buttons except the clicked one
    for (const genre of this.movieGenresList) {
      if (genre !== selectedGenre) {
        genre.selected = false;
      }
    }

    // console.log(`Selected genre: ${selectedGenre.selected ? selectedGenre.genre : 'None'}`);

    if (selectedGenre.selected) {
      // Perform some action when a genre is selected
      this.searchMovieByGenres(selectedGenre.genre);
    } else {
      // Perform some action when no genre is selected
      this.getAllMovies();
    }
  }




  // ----------------- searchMovies
  // @author @abhinav3254


  public searchMovieByGenres(generes: string) {
    this.homeService.searchMovieByGenres(generes, 0, 20).subscribe(
      (data) => {
        this.movies = data as Root;
        this.length = this.movies.totalElements;
      },
      (error) => {
        if (error.status === 200) {
        } else if (error.status == 401) {
          alert('session expired');
          this.router.navigate(['/']);
        }
      }
    )
  }





  movies: Root | undefined;
  length: any;

  searchText: string = '';

  constructor(private homeService: HomeService, public dialog: MatDialog, private dataSharingService: DatasharingserviceService,
    private router: Router
  ) { }

  ngOnInit(): void {

    // get all movies

    this.getAllMovies();

    // This code is for search bar

    // for search bar
    // Subscribe to changes in the search text
    this.dataSharingService.searchText$.subscribe((text) => {
      this.searchText = text;
      // console.log('from home search will be :- ' + this.searchText)
      if (this.searchText.length == 0) {
        this.getAllMovies();
      } else {
        this.homeService.searchMovieByTitle(this.searchText, 0, 20).subscribe(
          (data) => {
            this.movies = data as Root;
            // Set the 'length' property to 'pagesize_api' after data loads.
            this.length = this.movies.totalElements;
          },
          (error) => {
            if (error.status === 200) {
            } else if (error.status == 401) {
              alert('session expired');
              this.router.navigate(['/']);
            }
          }
        )
      }
    });
  }

  // get all movies

  public getAllMovies() {
    this.homeService.getMovies(0, 20).subscribe(
      (data) => {
        this.movies = data as Root;
        // Set the 'length' property to 'pagesize_api' after data loads.
        this.length = this.movies.totalElements;
      },
      (error) => {
        if (error.status === 200) {
        } else if (error.status == 401) {
          alert('session expired');
          this.router.navigate(['/']);
        }
      }
    );
  }

  // get movies by year
  public getMovieByYear(year: string) {

    this.homeService.searchMovieByYear(year, 0, 20).subscribe(
      (data) => {
        this.movies = data as Root;
        this.length = this.movies.totalElements;
      },
      (error) => {
        if (error.status === 200) {
        } else if (error.status == 401) {
          alert('session expired');
          this.router.navigate(['/']);
        }
      }
    )

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
