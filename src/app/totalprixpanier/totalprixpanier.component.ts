import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Produit} from '../model/produit';
import {Panier} from '../model/panier';

@Component({
  selector: 'app-totalprixpanier',
  templateUrl: './totalprixpanier.component.html',
  styleUrls: ['./totalprixpanier.component.css']
})
export class TotalprixpanierComponent implements OnInit {
  @Input() listproduit: Produit[];
  @Output() notification = new EventEmitter<number>();
  total: number;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.total = 0 ;
      for ( const i of this.listproduit )
      { console.log(this.listproduit.length);
        this.total += i.prix;
      }
      this.notification.emit( this.total);
    }, 500 );
  }

}
