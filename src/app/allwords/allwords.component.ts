import { Component, OnInit } from '@angular/core';
import { WordService } from '../word.service';

@Component({
  selector: 'app-allwords',
  templateUrl: './allwords.component.html',
  styleUrls: ['./allwords.component.scss']
})
export class AllwordsComponent implements OnInit {
  a1:string;
  all:Word;
  int(a :string):void {
  this.wordservice.searchByname(a).subscribe(word=>this.all=word);
  }
  // 决定了表的列显示顺序
  displayedColumns: string[] = ['name', 'meaning', 'example','collect',];
  allWords:Word[]
  getAllWords(){this.wordservice.getwords().subscribe(words =>this.allWords=words);

  }

  constructor(private wordservice:WordService) { }

  ngOnInit() {
    this.getAllWords()
  
  }

}
