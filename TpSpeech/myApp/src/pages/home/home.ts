import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SENTENCES } from './shared/sentences';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  sentences = SENTENCES;
  freetext;
  constructor(public navCtrl: NavController) {
  }

  onSubmit(txt){
    console.log(txt);
  }

}