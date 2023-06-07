import { Component } from '@angular/core';
import { ReadCsvService } from './read-csv.service';
import { Movie } from './movie.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CS575-Project2-Phase1 - Movie Filter';
  movies!: Movie[];

  constructor(private readCsvService: ReadCsvService) {}

  ngOnInit(): void {
    this.readCsvService.getMovies().subscribe(movies => {
      this.movies = movies;
      this.readCsvService.getMovieByID(1).subscribe(movie => {
        console.log(movie);
      });
    });
  }
  sortingOptions = ['id', 'popularity (increasing)', 'popularity (decreasing)',
    'budget (increasing)', 'budget (decreasing)', 'revenue (increasing)',
    'revenue (decreasing)', 'alphabetical (a-z)', 'alphabetical (z-a)',
    'release year (increasing)', 'release year (decreasing)'];

  currentSortingIndex = 0;
  currentSorting = this.sortingOptions[this.currentSortingIndex];

  cycleSorting(): void {
    this.currentSortingIndex = (this.currentSortingIndex + 1) % this.sortingOptions.length;
    this.currentSorting = this.sortingOptions[this.currentSortingIndex];
    this.sortMovies();
  }

  onSearchChange(searchValue: string): void {
    const target = event.target as HTMLInputElement;
    this.movies = this.movies.filter(movie => movie.original_title.toLowerCase().includes(searchValue.toLowerCase()));
  }

  sortMovies(): void {
    let sortedMovies!: Movie[];
    switch (this.currentSorting) {
      case 'id':
        sortedMovies = this.movies.sort((a, b) => a.id - b.id);
        break;
      case 'popularity (increasing)':
        sortedMovies = this.movies.sort((a, b) => a.popularity - b.popularity);
        break;
      case 'popularity (decreasing)':
        sortedMovies = this.movies.sort((a, b) => b.popularity - a.popularity);
        break;
      case 'budget (increasing)':
        sortedMovies = this.movies.sort((a, b) => a.budget - b.budget);
        break;
      case 'budget (decreasing)':
        sortedMovies = this.movies.sort((a, b) => b.budget - a.budget);
        break;
      case 'revenue (increasing)':
        sortedMovies = this.movies.sort((a, b) => a.revenue - b.revenue);
        break;
      case 'revenue (decreasing)':
        sortedMovies = this.movies.sort((a, b) => b.revenue - a.revenue);
        break;
      case 'alphabetical (a-z)':
        sortedMovies = this.movies.sort((a, b) => a.original_title.localeCompare(b.original_title));
        break;
      case 'alphabetical (z-a)':
        sortedMovies = this.movies.sort((a, b) => b.original_title.localeCompare(a.original_title));
        break;
      case 'release year (increasing)':
        sortedMovies = this.movies.sort((a, b) => a.release_year - b.release_year);
        break;
      case 'release year (decreasing)':
        sortedMovies = this.movies.sort((a, b) => b.release_year - a.release_year);
        break;
    }
    this.movies = sortedMovies;
  }
}
