import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { ProduitsComponent } from './produits/produits.component';
import { DetailproduitComponent } from './detailproduit/detailproduit.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { ProduitsimilaireComponent } from './produitsimilaire/produitsimilaire.component';
import { RegistrationComponent } from './registration/registration.component';
import {ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { CommentairesComponent } from './commentaires/commentaires.component';
import { AjoutproduitComponent } from './ajoutproduit/ajoutproduit.component';
@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,
    ProduitsComponent,
    DetailproduitComponent,
    ProduitsimilaireComponent,
    RegistrationComponent,
    LoginComponent,
    CommentairesComponent,
    AjoutproduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
