import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies: Movie[] = [];

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.homeService.getMovies().subscribe(
      (data) => {
        this.movies = data as Movie[];
      }
    );
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

