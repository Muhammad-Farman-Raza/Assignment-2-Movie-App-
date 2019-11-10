import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  constructor() { }
  movies = [
    { id: 'Flim1', name: 'Children of heaven' },
    { id: 'Flim2', name: 'Loin of Desert Umer Mukhtar' },
    { id: 'Flim3', name: 'Green Book' },
    { id: 'Flim4', name: 'Malik' },
    { id: 'Flim5', name: 'The Kid' },
    { id: 'Flim6', name: 'Ekhrajia' }
  ];

  getMovies(){
    return this.movies;
  }
  getAllMovies() {
    return this.movies;
  }

  deleteMovies(id) {
    this.movies = this.movies.filter(e => {
      return e.id !== id;
    });
  }
  addMovie(id,name){
    this.movies.push({id:id,name:name});

  }

  
}
