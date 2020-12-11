import {PipeTransform, Pipe} from '@angular/core';

import {concatMap, mergeMap, map, tap, catchError, switchMap} from 'rxjs/operators';
import { filter } from 'rxjs/operators';
import {Produit} from '../model/produit';
@Pipe({
    name: 'filterprodsearch'
  }
)
// tslint:disable-next-line:class-name
export class SearchprodfilterPipe implements PipeTransform
{

  transform(produits: Produit[], objet: string , couleur: string , minValue: any, maxValue: any): Produit[]
  {
    let produitsfiltrer: Produit[];
    if (!couleur || !objet || ! Produit)
    {
      produitsfiltrer = produits;
    }
    if (objet &&  !couleur)
    {
      produitsfiltrer = produits.filter(p => p.objets === objet && ( p.prix >= minValue) && (p.prix <= maxValue));
    }
    if (!objet &&  couleur)
    {
      produitsfiltrer = produits.filter(p => p.couleur === couleur && ( p.prix >= minValue) && (p.prix <= maxValue));
    }
    if (objet && couleur)
      // tslint:disable-next-line:max-line-length
    { produitsfiltrer = produits.filter((p: Produit) => p.objets === objet && (p.couleur === couleur) && ( p.prix >= minValue) && (p.prix <= maxValue) );
    }
    return produitsfiltrer;

  }
}
