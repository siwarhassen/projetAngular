import {Component, OnChanges, OnInit} from '@angular/core';
import {User} from './model/user';
import {UserService} from './shared/user.service';
import {DatasharingService} from './shared/datasharing.service';
import {ObjetsService} from './shared/objets.service';
import {Objets} from './model/objets';
import {MarqueService} from './shared/marque.service';
import {Marque} from './model/marque';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit, OnChanges{
  user = false;
  title = 'venteP';
  isUserLoggedIn: number;
  userconnecte: User;
  objets: Objets[];
  marques: Marque[];
  constructor(private serviceUser: UserService , private objetsService: ObjetsService, private marqueservice: MarqueService) {
  }
  ngOnInit(): void {
  this.isUserLoggedIn = JSON.parse(localStorage.getItem('user')).id;
  this.userconnecte = JSON.parse(localStorage.getItem('user'));
  this.objetsService.afficherobjets().subscribe(o =>
  {
    this.objets = o;
  });
  this.marqueservice.affichermarques().subscribe(m =>
  {
    this.marques = m;
  });
  }
ngOnChanges() {

}
 logout()
 { localStorage.removeItem('user');
   window.location.reload();
 }


}
