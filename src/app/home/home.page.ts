import { Component } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  text_sentences = [];
  textTest: string;


  constructor( private tts: TextToSpeech) {
    
  }

  Listen(){
    this.tts.speak(this.textTest).then(
      () => console.log("succes")
    ).catch((reason: any) => console.log(reason));
  }
}
