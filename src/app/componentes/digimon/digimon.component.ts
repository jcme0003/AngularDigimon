import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DigimonService } from 'src/app/servicios/digimon.service';

@Component({
  selector: 'app-digimon',
  templateUrl: './digimon.component.html',
  styleUrls: ['./digimon.component.css']
})
export class DigimonComponent implements OnInit {

  digimons: any[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private digimonService: DigimonService
  ) {
    this.digimonService.getDigimon(this.activatedRoute.snapshot.params['name']).subscribe(
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
