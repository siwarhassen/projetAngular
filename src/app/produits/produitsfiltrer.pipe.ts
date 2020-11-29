import {PipeTransform, Pipe} from '@angular/core';

import {concatMap, mergeMap, map, tap, catchError, switchMap} from 'rxjs/operators';
import { filter } from 'rxjs/operators';
import {Produit} from '../model/produit';
@Pipe({
    name: 'filtere'
  }
)
// tslint:disable-next-line:class-name
export class produitsFilterPipe implements PipeTransform
{

  transform(produits: Produit[], objet: string): Produit[]
  {

    let produitsfiltrer: Produit[];
    if (!objet || ! Produit)
    {
      produitsfiltrer = produits;
    }


    if (objet)
    {
// njarab= voitures.filter(voiture=>voiture.boite.indexOf(boite)!==-1 );
      produitsfiltrer = produits.filter(m => m.objets === objet);
    }


    return produitsfiltrer;







  }
}
