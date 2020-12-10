import { Injectable } from '@angular/core';
import {Produit} from '../model/produit';
import {HttpClient} from '@angular/common/http';
import {Comment} from '../model/comment';
@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  url = 'http://localhost:8089/SpringMVC/servlet/' ;
  constructor(private http: HttpClient) { }
  addcomment(c: Comment)
  {
    return this.http.post(this.url + 'addcomment', c );
  }
  getcomments(produitId)
  {
    return this.http.get<Comment[]>( this.url + 'getcomments?produit=' + produitId);
  }
  deletecomment(id)
  { console.log(id);
    return this.http.delete(this.url + 'deletecomment/' + id);

  }
}
