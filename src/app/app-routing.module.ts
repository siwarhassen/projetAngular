import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {ProduitsComponent} from './produits/produits.component';
import {DetailproduitComponent} from './detailproduit/detailproduit.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'produits', component: ProduitsComponent},
  {path: 'produits/detailproduit/:id', component: DetailproduitComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
