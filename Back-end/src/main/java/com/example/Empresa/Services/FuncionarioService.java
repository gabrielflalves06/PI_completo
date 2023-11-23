package com.example.Empresa.Services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Empresa.Entities.Funcionarios;
import com.example.Empresa.Repositories.FuncionariosRepositories;

@Service
public class FuncionarioService {
    @Autowired
    FuncionariosRepositories funcionariosRepository;

    public Funcionarios findById(Integer id) {
        Optional<Funcionarios> funcionario = funcionariosRepository.findById(id);
        return funcionario.orElse(null);
    }

    public List<Funcionarios> findAll() {
        List<Funcionarios> funcionario = funcionariosRepository.findAll();
        return funcionario;
    }

    public Funcionarios gravar(Funcionarios aluno){
        return funcionariosRepository.save(aluno);
    }

    public void deletar(Integer id){
        funcionariosRepository.deleteById(id);
    }

    public Funcionarios update(Integer id, Funcionarios aluno){
        Funcionarios alterado = findById(id);
        if(alterado!= null){
            alterado.setNome(aluno.getNome());
            alterado.setEmail(aluno.getEmail());
            alterado.setTelefone(aluno.getTelefone());
            alterado.setCargo(aluno.getCargo());
            alterado.setSalario(aluno.getSalario());
            /* alterado.setDepartamento(aluno.getDepartamento()); */
            return funcionariosRepository.save(alterado);
        }
        return null;
    }
}
