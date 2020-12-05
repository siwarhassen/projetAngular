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

  transform(produits: Produit[], objet: string , couleur: string): Produit[]
  {

    let produitsfiltrer: Produit[];
    if (!couleur || !objet || ! Produit)
    {
      produitsfiltrer = produits;
    }


    if (objet &&  !couleur)
    {
// njarab= voitures.filter(voiture=>voiture.boite.indexOf(boite)!==-1 );
      produitsfiltrer = produits.filter(m => m.objets === objet);
    }

    if (!objet &&  couleur)
    {
// njarab= voitures.filter(voiture=>voiture.boite.indexOf(boite)!==-1 );
      produitsfiltrer = produits.filter(m => m.couleur === couleur);
    }
    if (objet && couleur)
    {produitsfiltrer = produits.filter((p: Produit) => p.objets === objet && (p.couleur === couleur) );
    }


    return produitsfiltrer;







  }
}
