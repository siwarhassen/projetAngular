import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Produit} from '../model/produit';
import {ProduitService} from '../shared/produit.service';

@Component({
  selector: 'app-produitsselonobjet',
  templateUrl: './produitsselonobjet.component.html',
  styleUrls: ['./produitsselonobjet.component.css']
})
export class ProduitsselonobjetComponent implements OnInit {
  produits: Produit[];
  objet: string;
  marqueinput: string;
  constructor(private produitservice: ProduitService , private router: Router, private service: ActivatedRoute) { }

  ngOnInit(): void {
    this.marqueinput = null;
    this.service.params.subscribe(routeParams => {
      this.objet = routeParams.objet;
      this.produitservice.getProductsByObjet(routeParams.objet).subscribe(p =>
      { this.produits = p;
      });
  });
  }

  searchmarque(){
    if ( this.marqueinput !== '' )
    {
      this.produitservice.getProductByCriteria('marque' , this.marqueinput.toLowerCase() , 'objets' , this.objet).subscribe(p =>
      { this.produits = p;
        console.log(p);
      });
    }
    else {
      this.produitservice.getProductsByObjet(this.objet).subscribe(p =>
      { this.produits = p;
      });
    }
  }
}
