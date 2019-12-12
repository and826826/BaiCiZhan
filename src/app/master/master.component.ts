import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { WordService } from '../word.service';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss'],
})
export class MasterComponent {
  // url="http://baicizhan.qiniucdn.com/word_audios/tempt.mp3"
  url:string
  wordCollect:Word
  audio(name :string): void{
    this.url=`http://baicizhan.qiniucdn.com/word_audios/${name}.mp3`;
    new Audio(this.url).play();
    // audio.play();
  }
  collect(word :Word) :void{
    word.collect=true;
    this.wordservice.changeColecte(word).subscribe()

  }
  allwords:Word[];
  
  constructor(private wordservice:WordService){}
  ngOnInit(): void {
    this.getAllWord();
    
  }
  getAllWord(): void {this.wordservice.getwords().subscribe(words =>this.allwords=words);

  }


}
