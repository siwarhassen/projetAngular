import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {PanierService} from '../shared/panier.service';
import {Panier} from '../model/panier';
import jsPDF from 'jspdf';
import {Produit} from '../model/produit';

declare const require: any;

require('jspdf-autotable');
@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  constructor(private panierservice: PanierService) { }
  panier: Panier;
  listproduit: Produit[];
  userconnecte: number;
  totalprix: number;

  @ViewChild('contenu', {static: false}) contenu: ElementRef;

  ngOnInit(): void {
    this.userconnecte = JSON.parse(localStorage.getItem('user')).id;
    this.panierservice.getpanier(  this.userconnecte ).subscribe(p =>
    { this.panier = p;
      this.listproduit = p.produit;
    });
  }
  totalproduit(total: number)
  {
  this.totalprix = total;
  }
  deleteproduitdanspanier(id , p )
  { const index = this.listproduit.indexOf(p);
    console.log(index);
    this.panierservice.deleteproduitdanspanier(p.id, this.panier.id).subscribe(  () =>
      this.listproduit.splice(index, 1));
  }

  downloadCommande()
  { const d = document.getElementById('hi').innerText;
    const doc = new jsPDF();
    doc.text(d, 20, 70);
    // @ts-ignore
    doc.autoTable({ html: '#my-table' });
  /*  doc.autoTable({
      head: [['Name', 'Email', 'Country']],
      body: [
        ['David', 'david@example.com', 'Sweden'],
        ['Castille', 'castille@example.com', 'Spain'],
        // ...
      ],
    });*/


    doc.save('votrecommande1.pdf');
  }


}
