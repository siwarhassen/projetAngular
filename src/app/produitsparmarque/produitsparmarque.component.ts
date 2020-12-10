import { Component, OnInit } from '@angular/core';
import {Produit} from '../model/produit';
import {ProduitService} from '../shared/produit.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-produitsparmarque',
  templateUrl: './produitsparmarque.component.html',
  styleUrls: ['./produitsparmarque.component.css']
})
export class ProduitsparmarqueComponent implements OnInit {
  produits: Produit[];
  marque: string;
  categorieinput: string;
  constructor(private produitservice: ProduitService , private router: Router, private service: ActivatedRoute) { }

  ngOnInit(): void {
    this.categorieinput = null;
    this.service.params.subscribe(routeParams => {
      this.marque = routeParams.marque;
      this.produitservice.getProductsByMarque(routeParams.marque).subscribe(p =>
      { this.produits = p;
      });
    });
  }
  searchcategorie(e){
    if ( this.categorieinput !== '' )
    {
      this.produitservice.getProductByCriteria('genre' , this.categorieinput.toLowerCase() , 'marque' , this.marque).subscribe(p =>
      { this.produits = p;
        console.log(p);
      });
    }
    else {
      this.produitservice.getProductsByMarque(this.marque).subscribe(p =>
      { this.produits = p;
      });
    }
  }
}
