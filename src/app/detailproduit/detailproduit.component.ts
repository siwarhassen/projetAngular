import { Component, OnInit } from '@angular/core';
import {ProduitService} from '../shared/produit.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Produit} from '../model/produit';
import {CommentsService} from '../shared/comments.service';
import {Comment} from '../model/comment';
import { DatePipe } from '@angular/common';
import {PanierService} from '../shared/panier.service';
import {Panier} from '../model/panier';
import {User} from '../model/user';
import {UserService} from '../shared/user.service';
import { ToastrService } from 'ngx-toastr';
import {FavorisService} from '../shared/favoris.service';
import {Favoris} from '../model/favoris';
@Component({
  selector: 'app-detailproduit',
  templateUrl: './detailproduit.component.html',
  styleUrls: ['./detailproduit.component.css']
})
export class DetailproduitComponent implements OnInit {
  produit: Produit;
  comment: Comment;
  panier: Panier;
  favoris: Favoris;
  listcomment: Comment[];
  nbrecomment: number;
  userconnecte: number;
  userproduit: User;
  usercomment: User;
  verifp: any;
  verifFav: any;
  // tslint:disable-next-line:max-line-length
  constructor(private serviceuuser: UserService, private servicecomment: CommentsService,
              private serviceproduit: ProduitService, private panierservice: PanierService,
              private router: Router, private service: ActivatedRoute, private datePipe: DatePipe,
              private toastr: ToastrService, private favorisservice: FavorisService) { }

  ngOnInit(): void {
    this.verifp = new Panier();
    this.userconnecte = JSON.parse(localStorage.getItem('user')).id;
    this.comment = new Comment();
    this.serviceproduit.getdetailproduct(this.service.snapshot.params.id).subscribe(res => {
      this.produit = res;
      this.serviceuuser.getuser(res.user.id).subscribe( u =>
        { this.userproduit = u;
          this.panierservice.Verifierexistenceproduit(  this.userconnecte, res.id  ).subscribe( p =>
          { this.verifp = p;
            console.log(p);
          });
          this.favorisservice.Verifierexistenceproduit(  this.userconnecte, res.id  ).subscribe( p =>
          { this.verifFav = p;
            console.log(p);
          });
        }
      );
      this.servicecomment.getcomments(res.id).subscribe(c => {
        console.log(c[0].id);
        this.listcomment = c;
        this.nbrecomment = c.length;
      });
    });
    this.panierservice.getpanier(this.userconnecte).subscribe(p =>
    {
      this.panier = p;
    });
    this.favorisservice.getfavoris(this.userconnecte).subscribe(p =>
    {
      this.favoris = p;
    });
  }
  submitcomment(formcomment)
  { this.comment.id = Math.floor((Math.random() * 9999) +  1);
    this.comment.produit = this.produit;
    const date = new Date();
    this.comment.date = this.datePipe.transform(date, 'MMM d, y, h:mm a');
    this.comment.user = JSON.parse(localStorage.getItem('user'));
    this.servicecomment.addcomment(this.comment).subscribe( (e: Comment) =>
    {
      formcomment.reset();
      this.listcomment.push(e);
      this.nbrecomment++;
    });
  }
/*  deletecomment(id: number , c: Comment)
  { const index = this.listcomment.indexOf(c);
    this.servicecomment.deletecomment(id).subscribe( () =>
    { this.listcomment.splice(index, 1);
      this.nbrecomment--;
    }
    );
  }*/
  deletecomment(id){
    console.log(id);
    this.servicecomment.deletecomment(id).subscribe(
      () => {
        this.listcomment = this.listcomment.filter(comm => comm.id !== id);
        this.nbrecomment-- ;
      }
    );
  }
  ajoutproduitaupanier()
  {  console.log(this.produit.id);
     this.panierservice.addproducttopanier(this.produit.id, this.panier.id).subscribe( p =>
       { this.toastr.success('Produit ajouté dans le panier!', '', { timeOut: 1500});
         this.ngOnInit();
       });

  }
  ajoutproduitaufavoris()
  {   this.favorisservice.addproducttofavoris(this.produit.id, this.favoris.id).subscribe( p =>
    { this.toastr.success('Produit ajouté dans le panier!', '', { timeOut: 1500});
      this.ngOnInit();
    });

  }
  deleteproduit()
  {
    this.serviceproduit.deleteProduct(this.service.snapshot.params.id).subscribe(() =>
    {
      this.router.navigate(['home']);
    });
  }
  deletepanier()
  {  console.log(this.verifp);
     this.panierservice.deleteproduitdanspanier(this.produit.id, this.panier.id).subscribe( p =>
    {
       this.ngOnInit();
    });
  }

  deleteproduitfavoris()
  { this.favorisservice.deleteproduitdansfavoris(this.produit.id, this.favoris.id).subscribe( p =>
    {
      this.ngOnInit();
    });
  }
}
