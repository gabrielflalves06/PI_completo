import Link from "next/link"
import styles from "./cadastro.module.css"
export default function Cadastro() {
    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <div className={styles.body}>

                    <h1>Cadastro de departamento</h1>

                    <form action="processar_cadastro.php" method="POST" className={styles.cadastro}>

                        <label htmlFor="sobrenome">Nome:</label>
                        <input type="text" id="sobrenome" name="sobrenome" required /><br />

                        <label htmlFor="email">Telefone:</label>
                        <input type="tel" id="email" name="e/mail" required /><br />
                        
                        <label htmlFor="email">ID do Departamento:</label>
                        <input type="text" id="email" name="e/mail" required /><br />

                        <Link href={"/TabelaDep"}>Cadastrar</Link>

                    </form>
                </div>
            </div>
        </main>
    )
}