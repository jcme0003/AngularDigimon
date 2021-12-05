import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DigimonService {
  private urlDigimons: String;

  constructor(private http: HttpClient) {
    this.urlDigimons = "https://digimon-api.herokuapp.com/api/";
  }

  getDigimons(): Observable<any> {
    return this.http.get<any>(this.urlDigimons + "digimon");
  }

  getDigimon(name: String): Observable<any> {
    return this.http.get<any>(this.urlDigimons + "digimon/name/" + name);
  }
}