import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { WordService } from '../word.service';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss'],
})
export class MasterComponent {
  allwords:Word[];
  
  constructor(private wordservice:WordService){}
  ngOnInit(): void {
    this.getAllWord();
    
  }
  getAllWord(): void {this.wordservice.getwords().subscribe(words =>this.allwords=words);

  }


}
