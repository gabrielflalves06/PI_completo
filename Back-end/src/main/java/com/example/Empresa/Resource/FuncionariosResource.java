package com.example.Empresa.Resource;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.example.Empresa.Entities.Funcionarios;
import com.example.Empresa.Services.FuncionarioService;

@RestController
@RequestMapping(value = "/Funcionarios")
public class FuncionariosResource {
    @Autowired
    private FuncionarioService funcionariosService;

    @GetMapping
    public List<Funcionarios> findAll() {
        List<Funcionarios> aluno = funcionariosService.findAll();
        return aluno;
    }

    @GetMapping("/{id}")
    public Funcionarios findById(@PathVariable Integer id) {
        Funcionarios aluno = funcionariosService.findById(id);
        return aluno;
    }

    @PostMapping
    public ResponseEntity<Funcionarios> gravar(@RequestBody Funcionarios funcionario) {
        funcionario = funcionariosService.gravar(funcionario);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
                .buildAndExpand(funcionario.getId()).toUri();
        return ResponseEntity.created(uri).body(funcionario);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Integer id) {
        funcionariosService.deletar(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Funcionarios> update(@PathVariable Integer id, @RequestBody Funcionarios funcionario) {
        Funcionarios alterado = funcionariosService.update(id, funcionario);
        return ResponseEntity.ok().body(alterado);
    }
}