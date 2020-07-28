import { Component, OnInit } from '@angular/core';
import {Tarea} from 'src/app/Modelo/Tarea';
import {Router} from '@angular/router';
import {ServicioService} from 'src/app/Servicio/servicio.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  tarea:Tarea = new Tarea();
  constructor(private router:Router, private service:ServicioService) { }

  ngOnInit(){
  }

  Guardar( descripcion : String){
    this.tarea.descripcion = descripcion;

    if (this.tarea.descripcion == null || this.tarea.descripcion == "") {
      alert("El campo descripción no puede estas en blanco.");
    } else if(this.tarea.descripcion.length > 2048){
      alert("Ha superado la cantidad maxima de carateres permitidos para descripción.");
    }

    this.service.createTarea(this.tarea)
    .subscribe(data => {
      this.router.navigate(["listar"]);
          
    })
  }

}
