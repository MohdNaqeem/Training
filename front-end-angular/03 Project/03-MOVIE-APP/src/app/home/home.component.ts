import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private router: Router,
    private auth: AuthService
  ) {}

  trendingMovies: any;
  theatherMovies: any;
  popularMovies: any;

  ngOnInit(): void {
    this.getTrendingMovies();
    this.getTheatherMovies();
    this.getPopularMovies();
  }

  T: number = 1;
  getTrendingMovies() {
    this.http
      .get('http://localhost:4200/assets/data/trending-movies.json')
      .subscribe((movies) => {
        this.trendingMovies = movies;
      });
  }

  th: number = 1;
  getTheatherMovies() {
    this.http
      .get('http://localhost:4200/assets/data/theater-movies.json')
      .subscribe((movies) => {
        this.theatherMovies = movies;
      });
  }
  P: number = 1;
  getPopularMovies() {
    this.http
      .get('http://localhost:4200/assets/data/popular-movies.json')
      .subscribe((movies) => {
        this.popularMovies = movies;
      });
  }

  goToMovie(type: string, id: string) {
    this.router.navigate(['movie', type, id]);
  }
}
