import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { WordService } from '../word.service';

@Component({
  selector: 'app-wordshow',
  templateUrl: './wordshow.component.html',
  styleUrls: ['./wordshow.component.scss']
})
export class WordshowComponent {
  /** Based on the screen size, switch from standard to one column per row */
  mainWords:Word[];


 getMainWords():void{
   this.wordservice.getCollectedWord().subscribe(words =>this.mainWords=words);

 }

  constructor(private wordservice:WordService) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getMainWords();
    
  }
}
