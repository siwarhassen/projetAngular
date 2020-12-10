import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Objets} from '../model/objets';
import {Marque} from '../model/marque';

@Injectable({
  providedIn: 'root'
})
export class MarqueService {
  constructor(private http: HttpClient) { }

  getmarques()
  {
    return this.http.get<Marque[]>(  'http://localhost:8089/SpringMVC/servlet/getmarque');
  }
}
