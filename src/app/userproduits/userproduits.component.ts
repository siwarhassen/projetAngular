import { Component, OnInit } from '@angular/core';
import {ProduitService} from '../shared/produit.service';
import {Produit} from '../model/produit';
import {Objets} from '../model/objets';
import {ObjetsService} from '../shared/objets.service';
import {Marque} from '../model/marque';
import {MarqueService} from '../shared/marque.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-userproduits',
  templateUrl: './userproduits.component.html',
  styleUrls: ['./userproduits.component.css']
})
export class UserproduitsComponent implements OnInit {
  listproduits: Produit[];
  objets: Objets[];
  marques: Marque[];
  total: number;
  page: number ;
  pagin: number;
  searchprice: number;
  // tslint:disable-next-line:max-line-length
  constructor( private toastr: ToastrService, private serviceproduit: ProduitService , private objetsservice: ObjetsService, private marqueservice: MarqueService) { }

  ngOnInit(): void {
    this.page = 1;
    this.searchprice = null;
    this.serviceproduit.getproductsofuser(JSON.parse(localStorage.getItem('user')).id).subscribe(p =>
    { this.listproduits = p ;
      this.total = p.length;
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
      {    this.toastr.success('Produit bien supprimé!', 'Suppression', {timeOut: 1000});
           setTimeout(() => {    this.listproduits.splice(index, 1);
        }, 1500);
      }
    );
  }

}
