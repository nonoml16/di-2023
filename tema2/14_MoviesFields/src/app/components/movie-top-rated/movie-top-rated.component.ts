import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie-popular-list';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-top-rated',
  templateUrl: './movie-top-rated.component.html',
  styleUrls: ['./movie-top-rated.component.css']
})
export class MovieTopRatedComponent implements OnInit{
  movieList: Movie[] = [];

  constructor(private movieService: MovieService){}
  
  ngOnInit(): void {
    this.movieService.getMovieTopRatedList().subscribe(resp => {
      this.movieList = resp.results;
    })
  }

}
