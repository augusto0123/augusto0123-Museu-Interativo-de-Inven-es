import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { HomeComponent } from './pages/home/home.component';
import { CadastrarComponent } from './pages/cadastrar/cadastrar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListaInvencoesComponent } from './components/lista-invencoes/lista-invencoes.component';
import { CardComponent } from './components/card/card.component';
import { FormsModule } from '@angular/forms';
import { CategoriaPipe } from './pipes/categoria.pipe';



@NgModule({
  declarations: [
    AppComponent,
    CatalogoComponent,
    HomeComponent,
    CadastrarComponent,
    NavbarComponent,
    ListaInvencoesComponent,
    CardComponent,
    CategoriaPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
