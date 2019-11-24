import { Component, OnInit } from '@angular/core';
import { WordService } from '../word.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {
  words:Word[];

  constructor( private wordservice: WordService,) { }

  ngOnInit() {
    this.getwords();
  }
  getwords(): void {
    this.wordservice.getwords().subscribe(words => this.words = words);

  }

}
