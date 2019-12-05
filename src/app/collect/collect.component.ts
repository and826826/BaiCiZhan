import { Component } from '@angular/core';
import { WordService } from '../word.service';

@Component({
  selector: 'app-collect',
  templateUrl: './collect.component.html',
  styleUrls: ['./collect.component.scss']
})
export class CollectComponent {
  collectedwords:Word[];
  getAllCollect(): void {this.wordservice.getCollectedWord().subscribe(words =>this.collectedwords=words);

  }
  constructor(private wordservice:WordService) {}
   ngOnInit(): void {
      this.getAllCollect();
      
}
}