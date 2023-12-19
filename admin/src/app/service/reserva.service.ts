import { Injectable } from '@angular/core';
import { global } from './global'
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders }  from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  public url;
  constructor(
    private _http:HttpClient,
  ) { 
    this.url = global.url;
  }

  listar_reservas():Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.get(this.url+'listar_reservas',{headers:headers});
  }
}