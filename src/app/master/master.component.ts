import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { WordService } from '../word.service';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss'],
})
export class MasterComponent {
  collectedwords:Word[];
  todo = [
    'w',
    'Pick up groceries',
    'Go home',
    'Fall asleep',
    //`${this.collectedwords[0].name}`,
  ];

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
    }
  }
  constructor(private wordservice:WordService){}
  ngOnInit(): void {
    this.getAllCollect();
    
  }
  getAllCollect(): void {this.wordservice.getCollectedWord().subscribe(words =>this.collectedwords=words);

  }


}
