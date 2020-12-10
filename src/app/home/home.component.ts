import { Component, OnInit } from '@angular/core';
import {DatePipe} from '@angular/common';
import {ProduitService} from '../shared/produit.service';
import {Produit} from '../model/produit';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentdate: string;
  produitsPardate: Produit[];
  constructor(private datePipe: DatePipe , private serviceproduit: ProduitService) { }

  ngOnInit(): void {
    const date = new Date();
    this.currentdate = this.datePipe.transform(date, 'yyyy-MM-dd');
    this.serviceproduit.getProductsbyCurrentDate(this.currentdate).subscribe( p =>
    {
      this.produitsPardate = p;
    });
  }

}
