import { Component, OnInit } from '@angular/core';
import {UserService} from '../shared/user.service';
import {User} from '../model/user';

import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  password: string;
  email: string;

  constructor(private userservice: UserService , private  router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    console.log(localStorage.getItem('user'));
  }

  /*login()
  {
    this.userservice.login(this.email, this.password).subscribe((u: User ) =>
    { console.log(u);
      localStorage.setItem('user', JSON.stringify(u));
      setTimeout(() => {console.log(localStorage.getItem('user'));
      }, 2000);
      window.location.reload();
    }, error => { });

  }*/

  login() {

    this.userservice.login(this.email, this.password).subscribe(
      response =>
      { if ( response !== null)
        {
          localStorage.setItem('user', JSON.stringify(response));
          setTimeout(() => {console.log(localStorage.getItem('user'));
          }, 2000);
          window.location.reload();
        }
        else
        {
          this.toastr.error( 'verifier vos parametres ');
        }

      },
      error =>

        this.toastr.warning( 'Login Incorrecte ')


    );




  }

}
