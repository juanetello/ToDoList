import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tarea } from '../Modelo/Tarea';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http:HttpClient) { }

  Url = 'http://localhost:8080/tareas';

  getTarea(){
    return this.http.get<Tarea[]>(this.Url);
  }

  createTarea(tarea:Tarea){
    return this.http.post<Tarea>(this.Url,tarea);
  }

  deleteTarea(tarea:Tarea){
    return this.http.delete<Tarea>(this.Url + "/" + tarea.id);
  }
}
