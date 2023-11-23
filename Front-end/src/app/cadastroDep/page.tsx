'use client'

import { useState } from "react";
import styles from "./cadastro.module.css"

export default function Cadastro() {
    const [nomeDep, setNomeDep] = useState('');
    const [Telefone, setTelefone] = useState('');
    const [IdDep, setIdDep] = useState('');

    async function enviar(e) {
        try {
            console.log('Função enviar acionada!');
            e.preventDefault();
            const body = {
                item: {
                    nome: nomeDep,
                    Telefone: Telefone,
                    IdDep: IdDep,
                },
            };
            if (nomeDep ?? Telefone ?? IdDep) {
                console.log('Enviando dados para o backend...');
                /* const resposta = await api.post('/produto/', body); */
                /* console.log('Resposta do backend:', resposta.data); */
            }
        } catch (erro) {
            console.error('Erro ao enviar para o banco de dados:', erro);
        }
        console.log('Função enviada!');
    };

    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <div className={styles.body}>

                    <h1>Cadastro de departamento</h1>

                    <form>

                        <label htmlFor="nome">Nome:</label>
                        <input type="text" id="nome" name="nome" value={nomeDep} onChange={(e) => setNomeDep(e.target.value)} required /><br />

                        <label htmlFor="tel">Telefone:</label>
                        <input type="tel" id="tel" name="tel" value={Telefone} onChange={(e) => setTelefone(e.target.value)} required /><br />

                        <label htmlFor="IdDep">ID do Departamento:</label>
                        <input type="text" id="IdDep" name="IdDep" value={IdDep} onChange={(e) => setIdDep(e.target.value)} required /><br />

                        <button type="button" onClick={enviar}>Cadastrar</button>

                    </form>
                </div>
            </div>
        </main>
    )
}