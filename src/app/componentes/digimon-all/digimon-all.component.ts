import { Component, OnInit } from '@angular/core';
import { DigimonService } from 'src/app/servicios/digimon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-digimon-all',
  templateUrl: './digimon-all.component.html',
  styleUrls: ['./digimon-all.component.css']
})
export class DigimonAllComponent implements OnInit {

  digimons: any[] = [];

  constructor(
    private digimonService: DigimonService,
  ) {
    this.digimonService.getDigimons().subscribe(
      result => {
        this.digimons = result;
        console.log(this.digimons);
      }, error => {
        console.log("Error carga componente mas buscados");
      }
    );
  }

  ngOnInit() {
  }

}
