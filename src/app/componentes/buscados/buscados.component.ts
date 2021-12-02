import { Component, OnInit } from '@angular/core';
import { BuscadosService } from 'src/app/servicios/buscados.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscados',
  templateUrl: './buscados.component.html',
  styleUrls: ['./buscados.component.css']
})
export class BuscadosComponent implements OnInit {
  buscados: any[] = [];

  constructor(
      private buscadosService: BuscadosService,
      private router: Router
    ) {
    this.buscadosService.getMasBuscados().subscribe(
      result => {
        this.buscados = result.items;
        console.log(this.buscados);
      }, error => {
        console.log("Error carga componente mas buscados");
      }
    );
  }

  ngOnInit() {
  }

}
