import { Component, OnInit } from '@angular/core';
import {ProduitService} from '../shared/produit.service';
import {Produit} from '../model/produit';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Objets} from '../model/objets';
import {ObjetsService} from '../shared/objets.service';
import {MarqueService} from '../shared/marque.service';
import {Marque} from '../model/marque';

@Component({
  selector: 'app-modifierproduit',
  templateUrl: './modifierproduit.component.html',
  styleUrls: ['./modifierproduit.component.css']
})
export class ModifierproduitComponent implements OnInit {
  produit: Produit;
  produitForm: FormGroup;
  listeobjets: Objets[];
  listemarque: Marque[];
  constructor(private serviceproduit: ProduitService ,  private objetservice: ObjetsService
              // tslint:disable-next-line:align
              , private router: Router, private service: ActivatedRoute, private servicemarque: MarqueService) { }

  ngOnInit(): void {
    this.objetservice.getobjets().subscribe(e =>
    { this.listeobjets = e;
    });
    this.servicemarque.getmarques().subscribe( m =>
    {
      this.listemarque = m;
    });
    this.serviceproduit.getdetailproduct(this.service.snapshot.params.id).subscribe(res => {
      this.produit = res;
      console.log(this.produit.genre);
      this.produitForm =  new FormGroup({
          description: new FormControl(res.description),
          prix: new FormControl(res.prix, [ Validators.required , Validators.min(10), Validators.max(9000)]),
          genre: new FormControl(res.genre, [Validators.required]),
          etat: new FormControl(res.etat, [Validators.required]),
          marque: new FormControl(res.marque, [Validators.required]),
        couleur: new FormControl(res.couleur, [Validators.required]),
        objets: new FormControl(res.objets, [Validators.required])
        }
      );
    });


  }

aa(e)
{
  console.log(e.value);
}
  get description()
  {
    return this.produitForm.get('description');
  }

  get prix()
  {
    return this.produitForm.get('prix');
  }
  submit()
  {
    Object.assign(this.produit, this.produitForm.value);
    this.serviceproduit.updateproduct(this.service.snapshot.params.id, this.produit).subscribe( e =>
    {
      this.router.navigate(['produitdeuser']);
    });
    /* this.userservice.adduser(this.user).subscribe( () =>
      {
        localStorage.setItem('user', JSON.stringify(this.user));
        window.location.reload();
        // console.log(this.storage.get('user').id || 'LocaL storage is empty');
      }
      // this.router.navigate(['users'])
    );*/

  }

}
