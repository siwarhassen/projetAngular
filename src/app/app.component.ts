import {Component, OnChanges, OnInit} from '@angular/core';
import {User} from './model/user';
import {UserService} from './shared/user.service';

import {ObjetsService} from './shared/objets.service';
import {Objets} from './model/objets';
import {MarqueService} from './shared/marque.service';
import {Marque} from './model/marque';
import {Panier} from './model/panier';
import {PanierService} from './shared/panier.service';
import {Produit} from './model/produit';
import {ProduitService} from './shared/produit.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit, OnChanges{
  user = false;
  title = 'venteP';
  isUserLoggedIn: number;
  userconnecte: User;
  objets: Objets[];
  marques: Marque[];
  panier: Panier;
  searchinput: any;
  produitsPanier: Produit[];
  constructor(private panierservice: PanierService, private serviceUser: UserService ,
              private objetsService: ObjetsService, private marqueservice: MarqueService,
              private serviceproduit: ProduitService,   private router: Router) {
  }
  ngOnInit(): void {
    console.log(JSON.parse(localStorage.getItem('user')).id);
    this.isUserLoggedIn = JSON.parse(localStorage.getItem('user')).id;
    this.userconnecte = JSON.parse(localStorage.getItem('user'));
    this.objetsService.getobjets().subscribe(o =>
  {
    this.objets = o;
    console.log(o);
  });
    this.marqueservice.getmarques().subscribe(m =>
  {
    this.marques = m;
  });
    this.panierservice.getpanier(   this.userconnecte .id ).subscribe(p =>
    {
      this.produitsPanier = p.produit;
    });
  }
ngOnChanges() {

}
 logout()
 { localStorage.removeItem('user');
   window.location.reload();
 }
  search()
  {
 this.serviceproduit.searchProduct(this.searchinput).subscribe(p =>
 {
   this.router.navigate(['searchproduct', this.searchinput]);
 });
  }

}
