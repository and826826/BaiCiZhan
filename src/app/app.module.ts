import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowComponent } from './show/show.component';
import { from } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatInputModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatProgressSpinnerModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatSnackBarModule,
  MatCheckboxModule,
  MatTooltipModule,
  MatGridListModule,
  MatAutocompleteModule,
} from '@angular/material';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { WordshowComponent } from './wordshow/wordshow.component';
import { MatMenuModule } from '@angular/material/menu';
import { LayoutModule } from '@angular/cdk/layout';
import { WordDetailsComponent } from './word-details/word-details.component';
import { MasterComponent } from './master/master.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CollectComponent } from './collect/collect.component';
import { AllwordsComponent } from './allwords/allwords.component';


@NgModule({
  declarations: [
    AppComponent,
    ShowComponent,
    WordshowComponent,
    WordDetailsComponent,
    MasterComponent,
    CollectComponent,
    AllwordsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule, // 以下来自@angular/forms模块
    ReactiveFormsModule,
    MatInputModule, // 以下来自@angular/material模块
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatGridListModule,
    MatAutocompleteModule,
    MatMenuModule,
    LayoutModule,
    DragDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
