import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { comboInterface } from '../models/comboInterface';
import { facturaInterface } from '../models/facturaInterface';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {
  menus: Observable<any>;
  menu: Observable<any>;

  constructor( private http: HttpClient, private authservice: AuthService) { }

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'aplication/json',
    Authorization: this.authservice.getToken()
  });
  
  //traigo todos los combos
  allCombos():any{
    const url_api = "";
    return this.http.get("http://localhost:3000/api/combo");
  }
  //traigo los combos por individual
  idCombos(IdCombo:string):any{
    const url_api = "http://localhost:3000/api";
    return (this.menu=this.http.get(url_api+'/combo/'+IdCombo));
  }

  // traigo listado de pizza
  allPizzas():any{
    const url_api = "";
    return this.http.get("http://localhost:3000/api/pizza");
  }
  //traigo pizza por individual
  idPizzas(idPizza:string){
    const url_api ="http://localhost:3000/api";
    return (this.menu=this.http.get(url_api+'/pizza/'+idPizza));
  }

  //traigo listado de bebidas
  allBebidas():any{
    const url_api ="";
    return this.http.get("http://localhost:3000/api/bebidas");
  }
  //traido bebida por individual
  idBebidas(idBebidas:number){
    const url_api ="http://localhost:3000/api";
    return (this.menu=this.http.get(url_api+'/bebidas/'+idBebidas));
  }

  //traigo todo el registro tabla tamaño
  allTamaño():any{
    const url_api ="";
    return this.http.get("http://localhost:3000/api/tamano");
  }

  //traigo listado de ingredientes extra
  allIngredientes():any{
    const url_api ="";
    return this.http.get("http://localhost:3000/api/ingredientes");
  }

  factura(facturaInterface:facturaInterface):any{
    const url_api = 'http://localhost:3000/api/facturas';
    return this.http.post(url_api,facturaInterface);
  }
  //traigo lista de facturas
  allPedidos():any{
    const url_api ="";
    return this.http.get("http://localhost:3000/api/facturas");
  }

  //traigo factura por individual
  idFactura(id:number){
    const url_api ="http://localhost:3000/api";
    return (this.menu=this.http.get(url_api+'/facturas/'+id));
  }
  //eliminar factura o pedido de la lista
 deleteFactura(id: number){
    const url_api ='http://localhost:3000/api'; //debe estar logiado 
    return this.http.delete(url_api+'/facturas/'+id)
    .pipe(map(data => data));
  }

  updatefactura(id:number, facturaInterface:facturaInterface) {
    const url_api ='http://localhost:3000/api'; //debe estar logiado 
    return this.http.put(url_api+'/facturas/'+id, facturaInterface)
    .pipe(map(data => data));
  } 
}
