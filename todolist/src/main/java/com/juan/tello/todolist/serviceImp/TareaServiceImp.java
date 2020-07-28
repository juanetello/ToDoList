package com.juan.tello.todolist.serviceImp;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.juan.tello.todolist.entity.Tarea;
import com.juan.tello.todolist.repository.TareaRepository;
import com.juan.tello.todolist.service.TareaService;

@Service
public class TareaServiceImp implements TareaService{

	@Autowired
	private TareaRepository tareaRepository;
	
	@Override
	public List<Tarea> listar() {
		return tareaRepository.findAll();
	}
	
	@Override
	public Tarea listarId(String id) {
		return tareaRepository.findById(id);
	}

	@Override
	public Tarea add(Tarea tarea) throws Exception {
		
		if (tarea.getDescripcion() == null || tarea.getDescripcion().isEmpty()) {
			throw new Exception("El campo descripción no puede ser nulo");
		}
		
		return tareaRepository.save(tarea);
	}

	@Override
	public Tarea delete(String id) {
		
		Tarea tareaEliminar = tareaRepository.findById(id);
		
		tareaRepository.delete(tareaEliminar);
		
		return tareaEliminar;
	}


}
