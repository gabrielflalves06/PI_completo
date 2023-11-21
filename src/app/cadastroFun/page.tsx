'use client'

import { useState } from "react";
import styles from "./cadastro.module.css"
import api from "../api";
import Link from "next/link";
import { useRouter } from 'next/navigation'

export default function Cadastro() {

    const [nomeFun, setNomeFun] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cargo, setCargo] = useState('');
    const [salario, setSalario] = useState('');
    const router = useRouter()
    /* const [IdDep, setIdDep] = useState(''); */

    async function enviar(e: { preventDefault: () => void; }) {
        try {
            e.preventDefault();

            if (!nomeFun || !email || !telefone || !cargo || !salario) {
                console.log('Preencha todos os campos obrigatórios antes de enviar.');
                return;
            }

            const resposta = await api.post('/Funcionarios', {
                nome: nomeFun,
                email: email.toString(),
                telefone: telefone.toString(),
                cargo: cargo,
                salario: salario,
            });

            console.log('Resposta do backend:', resposta.data);
            router.push("/TabelaFun")
        } catch (erro) {
            console.log('Erro ao enviar para o banco de dados', erro);
        }
    }


    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <div className={styles.body}>
                    <div className={styles.voltar}>
                        <Link href="/TabelaFun">
                            <h1><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.3794 31.5L15.9375 24L23.3794 16.5M16.9716 24H32.0625" stroke="black"
                                    strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                <path
                                    d="M42 24C42 14.0625 33.9375 6 24 6C14.0625 6 6 14.0625 6 24C6 33.9375 14.0625 42 24 42C33.9375 42 42 33.9375 42 24Z"
                                    stroke="black" strokeWidth="4" strokeMiterlimit="10" />
                            </svg>
                                Voltar</h1>
                        </Link>
                    </div>

                    <h1>Cadastro de funcionario</h1>

                    <form className={styles.cadastro}>

                        <label htmlFor="nomeFun">Nome:</label>
                        <input type="text" id="nomeFun" name="nomeFun" value={nomeFun} onChange={(e) => setNomeFun(e.target.value)} required /><br />

                        <label htmlFor="email">E-mail:</label>
                        <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required /><br />

                        <label htmlFor="tel">Telefone:</label>
                        <input type="tel" id="tel" name="tel" value={telefone} onChange={(e) => setTelefone(e.target.value)} required /><br />

                        <label htmlFor="cargo">Cargo:</label>
                        <input type="text" id="cargo" name="cargo" value={cargo} onChange={(e) => setCargo(e.target.value)} required /><br />

                        <label htmlFor="sal">Salário:</label>
                        <input type="number" id="sal" name="sal" value={salario} onChange={(e) => setSalario(e.target.value)} required /><br />


                        {/* <label htmlFor="IdDep">ID do Departamento:</label>
                        <input type="text" id="IdDep" name="IdDep" value={IdDep} onChange={(e) => setIdDep(e.target.value)} required /><br />
 */}
                        <button type="button" onClick={enviar}>Cadastrar</button>

                    </form>
                </div>
            </div>
        </main>
    )
}