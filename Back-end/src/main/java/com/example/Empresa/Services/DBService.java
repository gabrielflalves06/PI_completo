package com.example.Empresa.Services;

import java.text.ParseException;
import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;

import com.example.Empresa.Entities.Funcionarios;
import com.example.Empresa.Repositories.FuncionariosRepositories;

@Service
public class DBService {

    @Autowired
    private FuncionariosRepositories FuncionariosRepositories;

    @Bean
    public void instanciarDB() throws ParseException {
        Funcionarios aluno1 = new Funcionarios("João da Silva","joao@gmail.com", "12345-678", "Vendedor", 10000.00);

        FuncionariosRepositories.saveAll(Arrays.asList(aluno1));
    }
}
