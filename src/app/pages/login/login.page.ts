import { Component, OnInit, ViewChild } from '@angular/core';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @ViewChild(IonSlides) slides: IonSlides;
  public wavesPosition: number = 0;
  public wavesDiference: number = 100;

  constructor(public keyboard: Keyboard) { }

  ngOnInit() {

  }

  segmentChanged($event) {
    if ($event.detail.value === "login") {
      this.slides.slidePrev();
      this.wavesPosition += this.wavesDiference;
    } else {
      this.slides.slideNext();
      this.wavesPosition -= this.wavesDiference;
    }
  }

}
