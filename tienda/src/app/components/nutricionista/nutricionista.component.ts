import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { global } from 'src/app/services/global';
import { ClienteService } from 'src/app/services/cliente.service'
declare var iziToast:any;

@Component({
  selector: 'app-nutricionista',
  templateUrl: './nutricionista.component.html',
  styleUrls: ['./nutricionista.component.css']
})


export class NutricionistaComponent {

  public token;
  public id;
  public url;
  public user_lc: any | null = null;
  public config_global: any = {};
  public data: any | null ;

  public reserva : any ={
    genero:''
  }; 

  constructor(
    private _clienteService:ClienteService,
    private _router:Router
  ){
    this.url=global.url;
    this.token = localStorage.getItem('token');
    this.id = localStorage.getItem('_id');
    this._clienteService.obtener_config_publico().subscribe(
      response=>{
        this.config_global = response.data;
        console.log(this.config_global);
 
      }
    )

    if(this.token){
      this._clienteService.obtener_cliente_guest(this.id, this.token).subscribe(response => {
        this.user_lc = response.data;
        console.log(this.user_lc);
        localStorage.setItem('user_data', JSON.stringify(this.user_lc));
        this.data = localStorage.getItem('user_data');
      });
    }
    
  }

  Reserva(reservaForm : NgForm){
    if(reservaForm.valid){
      
      this._clienteService.registro_reserva(this.reserva,this.token).subscribe(
        response=>{
          console.log(response);
          iziToast.show({
            title :'SUCCESS',
            titleColor : '#1DC74C',
            color : '#FFF',
            class : 'text-success',
            position : 'topRight',
            message:'Se reservo de manera exitosa'
          });
          this.reserva = {
            genero:'',
            nombres:'',
            apellidos:'',
            f_nacimiento:'',
            telefono:'',
            dni:'',
            email:'',
            peso:'',
            altura:'',
            comentario:'',

          }
          this._router.navigate(['productos'])
        },error=>{
          console.log(error);
        }
      )
    }else{
      iziToast.show({
        title :'ERROR',
        titleColor : '#FF0000',
        class : 'text-danger',
        position : 'topRight',
        message:'los datos del formulario no son validos'
      });
    }
}
}
