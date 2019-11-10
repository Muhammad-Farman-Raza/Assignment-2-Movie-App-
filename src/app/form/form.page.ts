import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { MovieServiceService } from '../component/movie-service.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {
  
public id : string;
public name : string;
data = [{id:this.id, name : this.name}];
  constructor(public alertController: AlertController,private movies: MovieServiceService) { }

  ngOnInit() {
  }
 async addMovie()
 {
  const alert = await this.alertController.create({
    header: 'Alert',
    subHeader: 'Subtitle',
    message: 'Movie '+ this.id +' by '+ this.name +' is added ',
    buttons: ['OK']
  });
    alert.present();
    this.movies.addMovie(this.id, this.name);
  }

}

