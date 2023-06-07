import { Injectable } from '@angular/core';
import { Movie } from '../movie.model';
import { Component } from '@angular/core';
import { ReadCsvService } from '../read-csv.service';

@Component({
  selector: 'app-movie-service',
  templateUrl: './movie-service.component.html',
  styleUrls: ['./movie-service.component.css']
})
export class MovieServiceComponent {
  // Sample movie data
  movies: Movie[] = []

  getFilteredMovies(genre: string): Movie[] {
    return this.movies;
  }

  getMovies(): Movie[] {
    return this.movies;
  }

  getMovie(id: number): Movie {
    return this.movies[id];
  }
}
