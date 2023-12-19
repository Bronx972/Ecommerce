

import { Component,OnInit } from '@angular/core';
import { ReservaService } from 'src/app/service/reserva.service';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})


export class ReservaComponent implements OnInit{

  public reserva : Array<any>=[];
  constructor(
    private _reservaService : ReservaService
    ) {}

  ngOnInit(): void {
    this._reservaService.listar_reservas().subscribe(
      response=>{
        this.reserva = response.data;
        console.log(this.reserva);
    },
    error=>{
      console.log(error); 
    }
    )
  }
}
