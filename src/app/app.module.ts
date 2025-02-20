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
import { StorageServiceModule } from 'ngx-webstorage-service';
import {NgxPaginationModule} from 'ngx-pagination';
import { DatePipe } from '@angular/common';
import { PanierComponent } from './panier/panier.component';
import { TotalprixpanierComponent } from './totalprixpanier/totalprixpanier.component';
import { UserproduitsComponent } from './userproduits/userproduits.component';
import { ModifierproduitComponent } from './modifierproduit/modifierproduit.component';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import {ClipboardModule} from '@angular/cdk/clipboard';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ShareButtonModule } from '@ngx-share/button';
import {produitsFilterPipe} from './produits/produitsfiltrer.pipe';
import {SearchprodfilterPipe} from './searchproducts/searchprodfilter.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng5SliderModule } from 'ng5-slider';
import { ToastrModule } from 'ngx-toastr';
import { ProduitsselonobjetComponent } from './produitsselonobjet/produitsselonobjet.component';
import { ModifieruserComponent } from './modifieruser/modifieruser.component';
import { HighlightDirective } from './highlight.directive';
import { ProduitsparmarqueComponent } from './produitsparmarque/produitsparmarque.component';
import { FavorisComponent } from './favoris/favoris.component';
import { SearchproductsComponent } from './searchproducts/searchproducts.component';
@NgModule({

  declarations: [
    AppComponent,
    produitsFilterPipe,
    SearchprodfilterPipe,
    HomeComponent,
    ProduitsComponent,
    DetailproduitComponent,
    ProduitsimilaireComponent,
    RegistrationComponent,
    LoginComponent,
    CommentairesComponent,
    AjoutproduitComponent,
    PanierComponent,
    TotalprixpanierComponent,
    UserproduitsComponent,
    ModifierproduitComponent,
    ProduitsselonobjetComponent,
    ModifieruserComponent,
    HighlightDirective,
    ProduitsparmarqueComponent,
    FavorisComponent,
    SearchproductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StorageServiceModule,
    FormsModule,
    NgxPaginationModule,
    HttpClientModule,
    FontAwesomeModule,
    ShareIconsModule,
    Ng5SliderModule,
    ShareButtonModule,
    ShareButtonsModule.withConfig({
      debug: true
    }),
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
  exports: [HighlightDirective]
})
export class AppModule { }
