import {Component, OnChanges, OnInit} from '@angular/core';
import {User} from './model/user';
import {UserService} from './shared/user.service';
import {DatasharingService} from './shared/datasharing.service';

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
  constructor(private serviceUser: UserService) {
  }
  ngOnInit(): void {
  this.isUserLoggedIn = JSON.parse(localStorage.getItem('user')).id;
  this.userconnecte = JSON.parse(localStorage.getItem('user'));
  }
ngOnChanges() {

}
 logout()
 { localStorage.removeItem('user');
   window.location.reload();
 }


}
