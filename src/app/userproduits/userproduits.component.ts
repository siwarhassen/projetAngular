import { Component, OnInit } from '@angular/core';
import {ProduitService} from '../shared/produit.service';
import {Produit} from '../model/produit';
import {Objets} from '../model/objets';
import {ObjetsService} from '../shared/objets.service';
import {Marque} from '../model/marque';
import {MarqueService} from '../shared/marque.service';

@Component({
  selector: 'app-userproduits',
  templateUrl: './userproduits.component.html',
  styleUrls: ['./userproduits.component.css']
})
export class UserproduitsComponent implements OnInit {
  listproduits: Produit[];
  objets: Objets[];
  marques: Marque[];
  searchprice: number;
  constructor(private serviceproduit: ProduitService , private objetsservice: ObjetsService, private marqueservice: MarqueService) { }

  ngOnInit(): void {
    this.searchprice = null;
    this.serviceproduit.getproductsofuser(JSON.parse(localStorage.getItem('user')).id).subscribe(p =>
    { this.listproduits = p ;
    });
    this.objetsservice.getobjets().subscribe( o =>
    {
      this.objets = o;
    });
    this.marqueservice.getmarques().subscribe(m =>
    {
      this.marques = m;
    });
  }
  searchliste(e){
  /*  this.listproduits = null;
    this.serviceproduit.rechercheproduit(this.searchinput.valueOf()).subscribe((data: Produit[]) => this.listproduits = data);
*/
    console.log(e.value);
  }
  deleteproduit(id: number , p: Produit)
  {
    const index = this.listproduits.indexOf(p);
    this.serviceproduit.deleteProduct(id).subscribe( () =>
      { this.listproduits.splice(index, 1);
      }
    );
  }

}
