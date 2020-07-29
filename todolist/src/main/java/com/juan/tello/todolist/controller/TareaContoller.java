package com.juan.tello.todolist.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.juan.tello.todolist.entity.Tarea;
import com.juan.tello.todolist.service.TareaService;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping({"/tareas"})
public class TareaContoller {
	
	@Autowired
	TareaService tareaService;
	
	@GetMapping
	public List<Tarea> listar(){
		return tareaService.listar();
	}
	
	@PostMapping
	public Tarea agregar(@RequestBody Tarea tarea) throws Exception {
		System.out.println("La descripcion de la tareea es: --> " + tarea.getDescripcion());
		return tareaService.add(tarea);
	}
	
	@DeleteMapping(path = {"/{id}"})
	public Tarea delete(@PathVariable("id") String id) {
		return tareaService.delete(id);
	}
	
	

}
