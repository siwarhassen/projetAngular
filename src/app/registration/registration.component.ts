import {Component, Inject, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../model/user';
import {UserService} from '../shared/user.service';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import {PanierService} from '../shared/panier.service';
import {Panier} from '../model/panier';
import {Favoris} from '../model/favoris';
import {FavorisService} from '../shared/favoris.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  userForm: FormGroup;
  user: User ;
  a: any;
  b: any;
  imagePreview: string;
  panier: Panier;
  favoris: Favoris;
  userImage: any = File;
  constructor(private userservice: UserService , private panierservice: PanierService , private favorisservice: FavorisService) { }

  ngOnInit(): void {
    this.panier = new Panier ();
    this.favoris = new Favoris ();
    this.user = new User ();
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    this.userForm =  new FormGroup({
      firstname: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastname: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [ Validators.required, ]),
      phone: new FormControl('', [Validators.required,  Validators.pattern('[0-9 ]{8}')]),
      adresse: new FormControl('', [Validators.required]),
      ville: new FormControl('', [Validators.required]),
       photo: new FormControl('', [Validators.required]),
      codepostal: new FormControl('', [Validators.required,   Validators.pattern('[0-9 ]{4}')]),
      password: new FormControl('', [Validators.required, Validators.minLength(4) ,	Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]),
      confirmpassword: new FormControl('', [Validators.required])
    },
      {
        validators: this.pass.bind(this)
      }
    );
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


  onImagePick(event) {
    const file = event.target.files[0];
    this.userForm.get('photo').patchValue(file);
    this.userForm.get('photo').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      if (this.userForm.get('photo').valid) {
        this.imagePreview = reader.result as string;
        this.userImage = file;
        console.log(this.userImage);
      } else {
        this.imagePreview = null;
        this.userImage = null;
      }
    };
    reader.readAsDataURL(file);
  }
  submit()
  {

    Object.assign(this.user, this.userForm.value);
    const user = this.userForm.value;
    user.photo = null;
    const formData = new FormData();
    formData.append('user',  JSON.stringify(user));
    formData.append('image', this.userImage);
    this.userservice.registration(formData).subscribe( ( u: User ) =>
    {
      localStorage.setItem('user', JSON.stringify(u));
      this.panier.user = u;
      this.panierservice.addpanier(this.panier).subscribe();
      this.favoris.user = u;
      this.favorisservice.addfavoris(this.favoris).subscribe();
      window.location.reload();
    });
    /*Object.assign(this.user, this.userForm.value);
    this.user.photo = '';
    this.userservice.register(this.user).subscribe( () =>
    { console.log(this.user);
      localStorage.setItem('user', JSON.stringify(this.user));
      this.panier.user = this.user;
      this.panierservice.addpanier(this.panier).subscribe();
      this.favoris.user = this.user;
      this.favorisservice.addfavoris(this.favoris).subscribe();*window.location.reload();
    }
     // this.router.navigate(['users'])
    );*/

  }


  MatchPassword(password: string, confirmPassword: string) {
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.controls[password];
      const confirmPasswordControl = formGroup.controls[confirmPassword];

      if (!passwordControl || !confirmPasswordControl) {
        return null;
      }

      if (confirmPasswordControl.errors && !confirmPasswordControl.errors.passwordMismatch) {
        return null;
      }

      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ passwordMismatch: true });
      } else {
        confirmPasswordControl.setErrors(null);
      }
    };
  }
  checkPasswords(group: FormGroup) {
    const pass = group.controls.password.value;
    const confirmPass = group.controls.confirmpassword.value;
    return pass === confirmPass ? null : { notSame: true };
  }

  pass(formGroup: FormGroup) {
    const {value: password} = formGroup.get('password');
    const {value: confirmPassword} = formGroup.get('confirmpassword');
    return password === confirmPassword ? null : {passwordNotMatch: true};
  }
}

