import {Component, OnInit, OnChanges, Input} from '@angular/core';
import {ProduitService} from '../shared/produit.service';
import {Produit} from '../model/produit';
import {ActivatedRoute, Router} from '@angular/router';
import {ObjetsService} from '../shared/objets.service';
import {Objets} from '../model/objets';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  listproduits: Produit[];
  category: string;
  page: number ;
  pagin: number;
  objet = '';
  couleur = '';
  total: number;
  listobjets: Objets[];
  searchprice: number;

  // tslint:disable-next-line:max-line-length
  constructor(private serviceproduit: ProduitService, private serviceobjets: ObjetsService, private router: Router, private service: ActivatedRoute) { }

  ngOnInit(): void {
    this.searchprice = null;
    this.page = 1;
    console.log( this.service.snapshot.params.category);
    this.service.params.subscribe(routeParams => {
      this.category = routeParams.category;
      this.serviceproduit.getproducts(  this.category).subscribe(res => {
        this.listproduits = res;
        this.total = res.length;
      });
    });
    this.serviceobjets.getobjets().subscribe( o =>
    {
      this.listobjets = o ;
    });

  }

  selectChangeobjet(event: any) {

    this.objet = event.target.value;
    console.log('objet:' + this.objet);
  }
  selectChangecouleur(event: any) {

    this.couleur = event.target.value;
    console.log('couleur:' + this.couleur);
  }

  searchmaxprice(e){
    /*  this.listproduits = null;
      this.serviceproduit.rechercheproduit(this.searchinput.valueOf()).subscribe((data: Produit[]) => this.listproduits = data);
  */
    console.log(e.value);
  }

}
