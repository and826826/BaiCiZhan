import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WordshowComponent } from './wordshow/wordshow.component';
import { WordDetailsComponent } from './word-details/word-details.component';
import { CollectComponent } from './collect/collect.component';
import { MasterComponent } from './master/master.component';
import { AllwordsComponent } from './allwords/allwords.component';


const routes: Routes = [
  { path: '', redirectTo: 'wordshow', pathMatch: 'full' },
  {path:'collected',component:CollectComponent},
  {path:'allwords',component:AllwordsComponent},
  {path: 'wordshow', component: WordshowComponent},
  {path:'master',component:MasterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
