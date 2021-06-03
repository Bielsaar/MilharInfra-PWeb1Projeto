import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import { FooterComponent } from './components/footer/footer.component';
import { BaseComponent } from './components/base/base.component';
import {HeaderComponent} from "./components/header/header.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatMenuModule} from "@angular/material/menu";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { ProdutosListarComponent } from './components/produtos/produtos-listar/produtos-listar.component';
import {ProdutosModule} from "./components/produtos/produtos.module";
import {RouterModule} from "@angular/router";
import {CarrinhoModule} from "./components/carrinho/carrinho.module";
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {InterceptorsModule} from "./interceptors/interceptors.module";
import {FirestoreModule} from "./firestore/firestore.module";
import { LoginComponent } from './components/login/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    BaseComponent,
    HeaderComponent,
    PageNotFoundComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    HttpClientModule,
    FormsModule,
    ProdutosModule,
    CarrinhoModule,
    RouterModule,
    MatSnackBarModule,
    InterceptorsModule,
    FirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
