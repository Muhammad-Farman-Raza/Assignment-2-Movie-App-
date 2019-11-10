import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../movie-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.page.html',
  styleUrls: ['./movie-detail.page.scss'],
})
export class MovieDetailPage implements OnInit {

  movies: any;
  singleMovie: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alertController: AlertController,
    private movieService: MovieServiceService,
  ) { }

  ngOnInit() {
    this.movies = this.movieService.getAllMovies();

    this.route.paramMap.subscribe(paramMap => {
      const val = paramMap.get('id');

      this.singleMovie = this.movies.find(obj => {
        return obj.id.includes(val);
      });
    });
    console.log(this.singleMovie.name);
  }

  get getMovie() {
    return this.movies;
  }

  getAllStudents() {
    return this.movies;
  }

  async deleteStudent() {

    const alert = await this.alertController.create({
      header: 'Alert',
      // subHeader: 'Subtitle',
      message: `Are you sure you want to remove ${this.singleMovie.name}?`,
      // buttons: ['OK']
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
            this.movieService.deleteMovies(this.singleMovie.id);
            this.router.navigateByUrl('/list');
          }
        }
      ]
    });

    alert.present();

    // this.everythingstudentService.deleteStudent(this.singleStudent.id);
    // const url = `studentslist`;

    // this.router.navigateByUrl(url);

    // this.studentsListService.deleteAStudent(this.singleStudent.id);
  }
}