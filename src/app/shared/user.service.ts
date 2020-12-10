import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {User} from '../model/user';
import {Observable, Subject} from 'rxjs';
import {Produit} from '../model/produit';

@Injectable({
  providedIn: 'root'
})
export class UserService {
   url = 'http://localhost:3000/users';
  constructor(private http: HttpClient) {}
  /*register(u: User)
  {return this.http.post( 'http://localhost:8089/SpringMVC/servlet/register' , u );

  }*/
  registration(formData: FormData)
  {
    return this.http.post('http://localhost:8089/SpringMVC/servlet/registration', formData) ;
  }
  login(email: string, password: string)
  {    const params = new HttpParams().set('email', email).set('password', password);
       return this.http.get<User>('http://localhost:8089/SpringMVC/servlet/login', {params} );
  }
  getuser(id)
  {
    return this.http.get<User>('http://localhost:8089/SpringMVC/servlet/getuser/'  + id);
  }
  updateuser(id, user: User)
  {
    return this.http.put(this.url + '/' + id , user);
  }

}
