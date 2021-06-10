import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../service/data-api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})

export class FacturaComponent implements OnInit {
  pedidos: any[];
  combo;
  constructor(private dataApi: DataApiService, private _router:ActivatedRoute,private router: Router ) { }

  ngOnInit() {
    this.mostrarPedidos()
  }

  mostrarPedidos(){
    this.dataApi.allPedidos().subscribe(
        resp=>{
          this.pedidos = resp
        },
        error =>console.log(error)
      )
  }

}