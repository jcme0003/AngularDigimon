import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuscadosService {
  private urlMasBuscados: String;

  constructor(private http: HttpClient) {
    this.urlMasBuscados = "https://api.fbi.gov/wanted/v1/list";
  }

  getMasBuscados(): Observable<any> {
    return this.http.get(this.urlMasBuscados + "");
  }
}
