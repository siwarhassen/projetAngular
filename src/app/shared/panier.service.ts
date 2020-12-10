import { Injectable } from '@angular/core';
import {User} from '../model/user';
import {Panier} from '../model/panier';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Produit} from '../model/produit';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  url = 'http://localhost:8089/SpringMVC/servlet/' ;
  constructor(private http: HttpClient) { }
  addpanier(p: Panier)
  {return this.http.post(this.url + 'addpanier' , p );
  }

 /* afficherpanier(userId)
  {
    return this.http.get<Panier[]>( this.url + '?userId=' + userId);
  }*/
 /* deleteproduitdanspanier(id)
  {
    return this.http.delete(this.url + '/' + id  );
  }
*/
 /* verifierexistenceproduitdeuuser(produitId , userId )
  { const params = new HttpParams().set('productId.id', produitId).set('userid', userId);
    return this.http.get<Panier>(this.url + '?', {params});
  }
*/

 getpanier(userId) {
   const params = new HttpParams().set('user', userId);
   return this.http.get<Panier>( this.url + 'getpanier', {params} );

}

  addproducttopanier(prodId , panId)
  {
    return this.http.put( this.url + 'addproducttopanier/' + prodId + '/' + panId , panId);
  }


  deleteproduitdanspanier(prodId, panId)
  {
    return this.http.delete<Panier>( this.url + 'deleteproduitdanspanier/' + prodId + '/' + panId );
  }

  Verifierexistenceproduit(userId, produitId)
  { const params = new HttpParams().set('userId', userId).set('produitId', produitId);
    return this.http.get<Panier>( this.url + 'verifierexistenceproduitdeuuser' , {params} );
  }


}
