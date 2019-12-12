import { Component } from '@angular/core';
import { WordService } from '../word.service';

@Component({
  selector: 'app-collect',
  templateUrl: './collect.component.html',
  styleUrls: ['./collect.component.scss']
})
export class CollectComponent {
  url:string;
  collectedwords:Word[];
  audio(name :string): void{
    this.url=`http://baicizhan.qiniucdn.com/word_audios/${name}.mp3`;
    new Audio(this.url).play();
    // audio.play();
  }
  collect(word :Word) :void{
    word.collect=false;
    this.wordservice.changeColecte(word).subscribe()

  }
  getAllCollect(): void {this.wordservice.getCollectedWord().subscribe(words =>this.collectedwords=words);

  }
  constructor(private wordservice:WordService) {}
   ngOnInit(): void {
      this.getAllCollect();
      
}
}