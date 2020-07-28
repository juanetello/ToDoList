package com.juan.tello.todolist.repository;

import java.util.List;

import org.springframework.data.repository.Repository;

import com.juan.tello.todolist.entity.Tarea;


public interface TareaRepository extends Repository<Tarea, Integer>{

	List<Tarea> findAll();
	Tarea findById(String id);
	Tarea save(Tarea tarea);
	void delete(Tarea tarea);
}
