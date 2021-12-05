import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuscadosService {
  private urlMasBuscados: String;

  constructor(private http: HttpClient) {
    // this.urlMasBuscados = "https://api.fbi.gov/wanted/v1/list";
    // this.urlMasBuscados = "apifbi/list";
    this.urlMasBuscados = "https://pokeapi.co/api/v2/";
  }

  getMasBuscados(): Observable<any> {
    return this.http.get<any>(this.urlMasBuscados + "type/");
  }
}
