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
import {ProduitsselonobjetComponent} from './produitsselonobjet/produitsselonobjet.component';
import {ModifieruserComponent} from './modifieruser/modifieruser.component';
import {ProduitsparmarqueComponent} from './produitsparmarque/produitsparmarque.component';
import {Favoris} from './model/favoris';
import {FavorisComponent} from './favoris/favoris.component';
import {SearchproductsComponent} from './searchproducts/searchproducts.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'produits/:category', component: ProduitsComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'detailproduit/:id', component: DetailproduitComponent},
  {path: 'ajoutproduit', component: AjoutproduitComponent},
  {path: 'panier', component: PanierComponent},
  {path: 'produitdeuser', component: UserproduitsComponent},
  {path: 'produitdeuser/updateproduit/:id', component: ModifierproduitComponent},
  {path: 'produitsselonobjet/:objet', component: ProduitsselonobjetComponent},
  {path: 'produitsselonmarque/:marque', component: ProduitsparmarqueComponent},
  {path: 'modifieruser', component: ModifieruserComponent},
  {path: 'favoris', component: FavorisComponent},
  {path: 'searchproduct/:critere', component: SearchproductsComponent},
  { path: '*', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
