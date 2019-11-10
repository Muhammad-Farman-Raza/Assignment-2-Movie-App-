import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieServiceService } from '../component/movie-service.service';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {

  constructor(private router: Router, private movieService: MovieServiceService) { }
  items: any;
  ngOnInit() {
    this.items = this.movieService.getMovies();
  }
  
  changeUrl(user) {
    const id = user.id;
    const url = `list/${id}`;
    this.router.navigateByUrl(url);
  }
  ionViewDidEnter() {
    console.log('view Enter');
    this.items = this.movieService.getMovies();
  }
}