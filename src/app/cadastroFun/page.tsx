'use client'

import { useState } from "react";
import styles from "./cadastro.module.css"

export default function Cadastro() {

    const [nomeFun, setNomeFun] = useState('');
    const [Email, setEmail] = useState('');
    const [Telefone, setTelefone] = useState('');
    const [Cargo, setCargo] = useState('');
    const [Salário, setSalário] = useState('');
    const [IdDep, setIdDep] = useState('');

    async function enviar(e) {
        try {
            console.log('Função enviar acionada!');
            e.preventDefault();
            const body = {
                item: {
                    nome: nomeFun,
                    Email: Email,
                    Telefone: Telefone,
                    Cargo: Cargo,
                    Salário: Salário,
                    IdDep: IdDep,
                },
            };

            if (nomeFun ?? Email ?? Telefone ?? Cargo ?? Salário ?? IdDep) {
                console.log('Enviando dados para o backend...');
                /* const resposta = await api.post('/produto/', body); */
                /* console.log('Resposta do backend:', resposta.data); */
            }
        } catch (erro) {
            console.error('Erro ao enviar para o banco de dados:', erro);
        }
    };

    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <div className={styles.body}>

                    <h1>Cadastro de funcionario</h1>

                    <form className={styles.cadastro}>

                        <label htmlFor="nomeFun">Nome:</label>
                        <input type="text" id="nomeFun" name="nomeFun" value={nomeFun} onChange={(e) => setNomeFun(e.target.value)} required /><br />

                        <label htmlFor="email">E-mail:</label>
                        <input type="email" id="email" name="email" value={Email} onChange={(e) => setEmail(e.target.value)} required /><br />

                        <label htmlFor="tel">Telefone:</label>
                        <input type="tel" id="tel" name="tel" value={Telefone} onChange={(e) => setTelefone(e.target.value)} required /><br />

                        <label htmlFor="cargo">Cargo:</label>
                        <input type="text" id="cargo" name="cargo" value={Cargo} onChange={(e) => setCargo(e.target.value)} required /><br />

                        <label htmlFor="sal">Salário:</label>
                        <input type="number" id="sal" name="sal" value={Salário} onChange={(e) => setSalário(e.target.value)} required /><br />

                        <label htmlFor="IdDep">ID do Departamento:</label>
                        <input type="text" id="IdDep" name="IdDep" value={IdDep} onChange={(e) => setIdDep(e.target.value)} required /><br />

                        <button type="button" onClick={enviar}>Cadastrar</button>

                    </form>
                </div>
            </div>
        </main>
    )
}