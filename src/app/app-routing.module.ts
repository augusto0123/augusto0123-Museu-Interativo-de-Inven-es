import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { CadastrarComponent } from './pages/cadastrar/cadastrar.component';
import { DetalhesInvencaoComponent } from './pages/detalhes-invencao/detalhes-invencao.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'catalogo', component:CatalogoComponent},
  {path: 'cadastrar', component:CadastrarComponent},
  {path: 'invencao/:id', component:DetalhesInvencaoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
