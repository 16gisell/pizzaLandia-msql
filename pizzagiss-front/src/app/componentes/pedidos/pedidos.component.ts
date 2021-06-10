import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../service/data-api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { facturaInterface } from '../../models/facturaInterface';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})

export class PedidosComponent implements OnInit {
  pedidos: any[];
  private facturar: facturaInterface ={
    Tipo_factura:'',
    fechaFactura: new Date,
  }
  constructor(private dataApi: DataApiService, private _router:ActivatedRoute,private router: Router ) { }

  ngOnInit() {
    this.mostrarPedidos();
  }

  mostrarPedidos(){
    this.dataApi.allPedidos().subscribe(
        resp=>{
          this.pedidos = resp
        },
        error =>console.log(error)
      )
  }
  Entregado(id){
    this.facturar.Tipo_factura= "Entregado";
    this.dataApi.updatefactura(id, this.facturar).subscribe(
      resp=>{
        this.mostrarPedidos();
      }
    )
  }

  Cancelado(id){
    this.dataApi.deleteFactura(id).subscribe(
      resp=>{
        this.mostrarPedidos();
        
      },
      error =>console.log(error)
    )
  }

}