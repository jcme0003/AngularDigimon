import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { BuscadosComponent } from './componentes/buscados/buscados.component';
import { AppRoutingModule } from './app-routing.module';
import { DigimonAllComponent } from './componentes/digimon-all/digimon-all.component';
import { DigimonComponent } from './componentes/digimon/digimon.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BuscadosComponent,
    DigimonAllComponent,
    DigimonComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
