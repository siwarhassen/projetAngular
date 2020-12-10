import { Component, OnInit } from '@angular/core';
import {UserService} from '../shared/user.service';
import {User} from '../model/user';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-modifieruser',
  templateUrl: './modifieruser.component.html',
  styleUrls: ['./modifieruser.component.css']
})
export class ModifieruserComponent implements OnInit {
  user: User;
  userForm: FormGroup;
  constructor(private serviceuser: UserService, private toastr: ToastrService) { }

  ngOnInit(): void {
    console.log(JSON.parse(localStorage.getItem('user')));
    this.serviceuser.getuser(JSON.parse(localStorage.getItem('user')).id).subscribe(u =>
    {
      this.user = u;
      console.log(u);
      this.userForm =  new FormGroup({
          firstname: new FormControl(u.firstname, [Validators.required, Validators.minLength(3)]),
          lastname: new FormControl(u.lastname, [Validators.required, Validators.minLength(3)]),
          email: new FormControl(u.email, [ Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
          phone: new FormControl(u.phone, [Validators.required,  Validators.pattern('[0-9 ]{8}')]),
          adresse: new FormControl(u.adresse, [Validators.required]),
          ville: new FormControl(u.ville, [Validators.required]),
          codepostal: new FormControl(u.codepostal, [Validators.required, Validators.pattern('[0-9 ]{4}')]),
          password: new FormControl(u.password, [Validators.required, Validators.minLength(4) ,	Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]),
          confirmpassword: new FormControl(u.password, [Validators.required])
        },
        {
          validators: this.pass.bind(this)
        }
      );
    });
  }

    get firstname()
    {
      return this.userForm.get('firstname');
    }
    get lastname()
    {
      return this.userForm.get('lastname');
    }
    get email()
    {
      return this.userForm.get('email');
    }
    get phone()
    {
      return this.userForm.get('phone');
    }
    get adresse()
    {
      return this.userForm.get('adresse');
    }
    get ville()
    {
      return this.userForm.get('ville');
    }
    get codepostal()
    {
      return this.userForm.get('codepostal');
    }
    get password()
    {
      return this.userForm.get('password');
    }
    get confirmpassword()
    {
      return this.userForm.get('confirmpassword');
    }
    get photo()
    {
      return this.userForm.get('photo');
    }
  submit()
  {
    Object.assign(this.user, this.userForm.value);
    this.serviceuser.updateuser(this.user.id, this.user).subscribe( u =>
    {
       localStorage.setItem('user', JSON.stringify(this.user));
       this.toastr.success('Compte bien modifié!', '', { timeOut: 1500});
       window.location.reload();
    });
  }
  pass(formGroup: FormGroup) {
    const {value: password} = formGroup.get('password');
    const {value: confirmPassword} = formGroup.get('confirmpassword');
    return password === confirmPassword ? null : {passwordNotMatch: true};
  }
}
