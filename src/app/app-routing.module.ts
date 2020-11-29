import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {ProduitsComponent} from './produits/produits.component';
import {DetailproduitComponent} from './detailproduit/detailproduit.component';
import {RegistrationComponent} from './registration/registration.component';
import {LoginComponent} from './login/login.component';
import {AjoutproduitComponent} from './ajoutproduit/ajoutproduit.component';
import {PanierComponent} from './panier/panier.component';
import {UserproduitsComponent} from './userproduits/userproduits.component';
import {ModifierproduitComponent} from './modifierproduit/modifierproduit.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'produits/:category', component: ProduitsComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'produits/:type/detailproduit/:id', component: DetailproduitComponent},
  {path: 'ajoutproduit', component: AjoutproduitComponent},
  {path: 'panier', component: PanierComponent},
  {path: 'produitdeuser', component: UserproduitsComponent},
  {path: 'produitdeuser/updateproduit/:id', component: ModifierproduitComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
