import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscadosComponent } from './componentes/buscados/buscados.component';

const routes: Routes = [
  {path: 'home', component: BuscadosComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: '**', pathMatch: 'full', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
