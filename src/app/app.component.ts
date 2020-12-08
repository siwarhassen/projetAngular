import {Component, OnChanges, OnInit} from '@angular/core';
import {User} from './model/user';
import {UserService} from './shared/user.service';

import {ObjetsService} from './shared/objets.service';
import {Objets} from './model/objets';
import {MarqueService} from './shared/marque.service';
import {Marque} from './model/marque';
import {Panier} from './model/panier';
import {PanierService} from './shared/panier.service';

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
  panier: Panier[];
  constructor(private panierservice: PanierService, private serviceUser: UserService ,
              private objetsService: ObjetsService, private marqueservice: MarqueService) {
  }
  ngOnInit(): void {
  this.isUserLoggedIn = JSON.parse(localStorage.getItem('user')).id;
  this.userconnecte = JSON.parse(localStorage.getItem('user'));
  this.objetsService.getobjets().subscribe(o =>
  {
    this.objets = o;
  });
  this.marqueservice.getmarques().subscribe(m =>
  {
    this.marques = m;
  });
  this.panierservice.afficherpanier(   this.userconnecte .id ).subscribe(p =>
    {
      this.panier = p;
    });
  }
ngOnChanges() {

}
 logout()
 { localStorage.removeItem('user');
   window.location.reload();
 }


}
