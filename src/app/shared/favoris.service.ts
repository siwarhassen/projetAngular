import { Injectable } from '@angular/core';
import {User} from '../model/user';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Produit} from '../model/produit';
import {Favoris} from '../model/favoris';

@Injectable({
  providedIn: 'root'
})
export class FavorisService {
  url = 'http://localhost:8089/SpringMVC/servlet/' ;
  constructor(private http: HttpClient) { }
  addfavoris(f: Favoris)
  {return this.http.post(this.url + 'addfavoris' , f );
  }
  getfavoris(userId) {
    const params = new HttpParams().set('user', userId);
    return this.http.get<Favoris>( this.url + 'getfavoris', {params} );

  }

  addproducttofavoris(prodId , panId)
  {
    return this.http.put( this.url + 'addproducttofavoris/' + prodId + '/' + panId , panId);
  }


  deleteproduitdansfavoris(prodId, panId)
  {
    return this.http.delete<Favoris>( this.url + 'deleteproduitdansfavoris/' + prodId + '/' + panId );
  }

  Verifierexistenceproduit(userId, produitId)
  { const params = new HttpParams().set('userId', userId).set('produitId', produitId);
    return this.http.get<Favoris>( this.url + 'verifierexistenceproduitdeuuserf' , {params} );
  }


}
