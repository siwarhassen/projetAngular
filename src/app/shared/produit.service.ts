import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Produit} from '../model/produit';
import {User} from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  url = 'http://localhost:8089/SpringMVC/servlet/' ;
  constructor(private http: HttpClient ) { }

 /* addproduct(p: Produit)
  {
    return this.http.post(this.url + 'addproduct', p );
  }*/
  addproduct(formData: FormData)
  {
    return this.http.post( this.url + 'addprod', formData) ;
  }
  getproducts(genre)
  {
    return this.http.get<Produit[]>(this.url + 'getproductsbygenre' + '?genre=' + genre);
  }
  getdetailproduct(id)
  {
    return this.http.get<Produit>(this.url + 'getdetailproduct/' + id);
  }
  getproductsofuser(id)
  {
    return this.http.get<Produit[]>(this.url + 'getproductsofuser' +  '?user=' + id );
  }
  updateproduct(id, produit: Produit)
  {
    return this.http.put(this.url + 'updateproduct', produit);
  }

  deleteProduct(id)
  {
    return this.http.delete<Produit>(this.url + 'deleteproduct/' + id );
  }
  getProductsByObjet(objet)
  {
    return this.http.get<Produit[]>(this.url + 'getProductsByObjet' +  '?objets=' + objet);
  }
  getProductsByMarque(marque)
  {
    return this.http.get<Produit[]>(this.url + 'getProductsByMarque' + '?marque=' + marque);
  }
  getProductsbyCurrentDate(date)
  {
    return this.http.get<Produit[]>(this.url + 'getProductsbyCurrentDate' + '?date=' + date);
  }
  searchProduct(searchinput)
  {
    return this.http.get<Produit[]>(this.url + '/?q=' + searchinput);
  }

  getProductByCriteria(criteria: string, val: any, condition: string , val2: any) {
    const params = new HttpParams().set('criteria', criteria).set('val', val).set('condition', condition).set('val2', val2);
    return this.http.get<Produit[]>(this.url + 'getProductByCriteria' , {params});
  }

  getsimilaireProducts(genre, objets)
  { const params = new HttpParams().set('genre', genre).set('objets', objets);
    return this.http.get<Produit[]>(this.url + 'getsimilaireProducts'  , {params}  );
  }
}
