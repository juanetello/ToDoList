import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioService } from '../../Servicio/servicio.service';
import { Tarea } from 'src/app/Modelo/Tarea';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  tareas: Tarea[];
  constructor(private service: ServicioService, private router: Router) { }

  ngOnInit() {
    this.service.getTarea()
      .subscribe(data => {
        this.tareas = data;
      })
  }

  Delete(tarea: Tarea) {
    this.service.deleteTarea(tarea)
      .subscribe(data => {
        this.tareas = this.tareas.filter(tareaEliminar => tareaEliminar !== tarea);
      })
  }

}
