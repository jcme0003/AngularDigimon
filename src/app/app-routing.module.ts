import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscadosComponent } from './componentes/buscados/buscados.component';
import { DigimonAllComponent } from './componentes/digimon-all/digimon-all.component';
import { DigimonComponent } from './componentes/digimon/digimon.component';

const routes: Routes = [
  {path: '', component: DigimonAllComponent},
  {path: ':name', component: DigimonComponent},
  {path: '**', pathMatch: 'full', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
