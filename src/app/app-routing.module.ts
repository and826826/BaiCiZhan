import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WordshowComponent } from './wordshow/wordshow.component';
import { WordDetailsComponent } from './word-details/word-details.component';
import { CollectComponent } from './collect/collect.component';
import { MasterComponent } from './master/master.component';


const routes: Routes = [
  { path: '', redirectTo: 'wordshow', pathMatch: 'full' },
  {path: 'wordshow', component: WordshowComponent},
  {path:'collect',component:CollectComponent},
  {path:'master',component:MasterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
