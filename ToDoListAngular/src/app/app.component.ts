import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ServicioService } from './Servicio/servicio.service';
import { Tarea } from './Modelo/Tarea';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDo List';

  tarea:Tarea = new Tarea();
  constructor(private router:Router, private service: ServicioService){}

  Listar(){
    this.router.navigate(["listar"]);
  }

  Guardar( descripcion : String){
    this.tarea.descripcion = descripcion;

    if (this.tarea.descripcion == null || this.tarea.descripcion == "") {
      alert("El campo descripción no puede estar en blanco.");
    }
      
    this.service.createTarea(this.tarea)
    .subscribe(data => {   
      this.router.navigate([""]);
    })
  }
  
}
