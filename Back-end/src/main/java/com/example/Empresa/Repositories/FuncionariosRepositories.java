package com.example.Empresa.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.Empresa.Entities.Funcionarios;

@Repository
public interface FuncionariosRepositories extends JpaRepository<Funcionarios, Integer>{

}
