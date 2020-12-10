import { Component, OnInit } from '@angular/core';
import {FavorisService} from '../shared/favoris.service';
import {Produit} from '../model/produit';

@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.component.html',
  styleUrls: ['./favoris.component.css']
})
export class FavorisComponent implements OnInit {
  listproduitfavoris: Produit[];
  userconnecte: number;
  constructor( private favorisservice: FavorisService) { }

  ngOnInit(): void {
    this.userconnecte = JSON.parse(localStorage.getItem('user')).id;
    this.favorisservice.getfavoris(  this.userconnecte ).subscribe(f =>
    {
      this.listproduitfavoris = f.produit;
    });
  }

}
