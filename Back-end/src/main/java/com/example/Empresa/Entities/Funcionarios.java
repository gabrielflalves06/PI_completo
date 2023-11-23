package com.example.Empresa.Entities;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity(name = "Funcionarios")
public class Funcionarios implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Column(name = "Nome")
    String nome;

    @Column(name = "email")
    String email;

    @Column(name = "Telefone")
    String telefone;

    @Column(name = "Cargo")
    String cargo;

    @Column(name = "Salario")
    Number Salario;

    /*
     * @ManyToOne
     * 
     * @JoinColumn(name = "departamento_id", nullable = false)
     * private Departamentos departamento;
     */
    public Funcionarios(String nome, String email, String telefone, String cargo, Number salario) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.cargo = cargo;
        this.Salario = salario;/*
                                * this.departamento = departamento;
                                */
    }

    public Funcionarios() {

    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public String getCargo() {
        return cargo;
    }

    public void setCargo(String cargo) {
        this.cargo = cargo;
    }

    public Number getSalario() {
        return Salario;
    }

    public void setSalario(Number salario) {
        Salario = salario;

    }
}
