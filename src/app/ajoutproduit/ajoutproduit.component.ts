import { Component, OnInit } from '@angular/core';
import {User} from '../model/user';
import {Produit} from '../model/produit';
import {ProduitService} from '../shared/produit.service';
import {ObjetsService} from '../shared/objets.service';
import {Objets} from '../model/objets';
import {MarqueService} from '../shared/marque.service';
import {Marque} from '../model/marque';
import {DatePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ajoutproduit',
  templateUrl: './ajoutproduit.component.html',
  styleUrls: ['./ajoutproduit.component.css']
})
export class AjoutproduitComponent implements OnInit {
 produit: Produit;
 objets: Objets[];
 marques: Marque[];
  produitImage: any = File;
  imagePreview: string;
  // tslint:disable-next-line:max-line-length
 constructor(   private router: Router, private toastr: ToastrService, private produitservice: ProduitService, private objetservice: ObjetsService, private marqueservice: MarqueService,  private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.produit = new Produit();
    this.objetservice.getobjets().subscribe(e =>
    {this.objets = e;
     console.log('h');

    });
    this.marqueservice.getmarques().subscribe(m =>
    {
      this.marques = m;
      console.log(m);
    });
    console.log(this.produit.objets);
  }

  onImagePick(event) {
    const file = event.target.files[0];
    this.produitImage = file;
    const reader = new FileReader();
    reader.onload = () => {
      if ( this.produitImage != null) {
        this.imagePreview = reader.result as string;
      } else {
        this.imagePreview = null;
      }
    };
    reader.readAsDataURL(file);
  }
  vendre()
  {  const date = new Date();
     this.produit.date = this.datePipe.transform(date, 'yyyy-MM-dd');
     this.produit.user = JSON.parse(localStorage.getItem('user'));
     const produit = this.produit;
     const formData = new FormData();
     formData.append('produit',  JSON.stringify(produit));
     formData.append('image', this.produitImage);
     this.produitservice.addproduct(formData).subscribe( () =>
      {
      this.toastr.success('Produit bien ajouté!', 'Ajout', {timeOut: 1000});
      setTimeout(() => {  this.router.navigate(['produitdeuser']);
        }, 1500);
      }
      // this.router.navigate(['users'])
    );
  }
  changeobjet(e) {
    console.log(this.produit.objets);
  }
}
