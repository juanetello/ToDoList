package com.juan.tello.todolist.service;

import java.util.List;

import com.juan.tello.todolist.entity.Tarea;


public interface TareaService {
	
	List<Tarea>listar();
	Tarea listarId(String id);
	Tarea add(Tarea tarea) throws Exception;
	Tarea delete(String id);
	
}
 