import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Produit} from '../model/produit';
import {Objets} from '../model/objets';

@Injectable({
  providedIn: 'root'
})
export class ObjetsService {
  constructor(private http: HttpClient) { }

  getobjets()
  {
    return this.http.get<Objets[]>( 'http://localhost:8089/SpringMVC/servlet/getobjets');
  }
}
