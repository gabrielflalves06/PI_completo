package com.example.Empresa.Entities;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity(name = "Departamento")
public class Departamentos implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @Column(name = "id")
    String id;

    @Column(name = "Nome")
    String nome;

    @Column(name = "Telefone")
    String telefone;

}
