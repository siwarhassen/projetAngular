import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Produit} from '../model/produit';
import {ProduitService} from '../shared/produit.service';

@Component({
  selector: 'app-produitsimilaire',
  templateUrl: './produitsimilaire.component.html',
  styleUrls: ['./produitsimilaire.component.css']
})
export class ProduitsimilaireComponent implements OnInit {
  @Input() produit: Produit;
 listproduitssimilaires: Produit[];
  @Output() getnombre = new EventEmitter<number>();
  totalproduits: number;
  constructor(private serviceproduit: ProduitService) { }

  ngOnInit(): void {
    this.serviceproduit.getsimilaireProducts(this.produit.genre, this.produit.objets).subscribe(res => {

      this.listproduitssimilaires = res.filter(p => p.id !==  this.produit.id );
      console.log(res);
      this.totalproduits = res.length;
    });
    this.getnombre.emit( this.totalproduits);
    setTimeout(() => {
      this.totalproduits = this.listproduitssimilaires.length;
      this.getnombre.emit( this.totalproduits);
    }, 500 );
  }

}
