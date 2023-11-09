import Link from "next/link";
import styles from "./tabela.module.css"


export default function Produtos() {
    return (
        <section className={styles.ProdutoEstilo}>


            <main>
                <div className={styles.mainConteudo}>
                    <div className={styles.titulo}>
                        <h1>Funcionarios</h1>
                    </div>
                    <div className={styles.buscaEcadastro}>
                        <div className={styles.pesquisa}>
                            <input
                                type="text"
                                placeholder="Pesquisar por:nome, E-mail ou Cargo"
                            />
                            {/* <img src="" alt=""></img> */}
                        </div>

                        <Link href="/cadastroFun">
                            <svg width="34" height="34" viewBox="0 0 34 34" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_57_593)">
                                    <path
                                        d="M18.7 15.3H25.5V18.7H18.7V25.5H15.3V18.7H8.5V15.3H15.3V8.5H18.7V15.3ZM17 34C12.4913 34 8.1673 32.2089 4.97918 29.0208C1.79107 25.8327 0 21.5087 0 17C0 12.4913 1.79107 8.1673 4.97918 4.97918C8.1673 1.79107 12.4913 0 17 0C21.5087 0 25.8327 1.79107 29.0208 4.97918C32.2089 8.1673 34 12.4913 34 17C34 21.5087 32.2089 25.8327 29.0208 29.0208C25.8327 32.2089 21.5087 34 17 34ZM17 30.6C20.6069 30.6 24.0662 29.1671 26.6167 26.6167C29.1671 24.0662 30.6 20.6069 30.6 17C30.6 13.3931 29.1671 9.93384 26.6167 7.38335C24.0662 4.83285 20.6069 3.4 17 3.4C13.3931 3.4 9.93384 4.83285 7.38335 7.38335C4.83285 9.93384 3.4 13.3931 3.4 17C3.4 20.6069 4.83285 24.0662 7.38335 26.6167C9.93384 29.1671 13.3931 30.6 17 30.6Z"
                                        fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_57_593">
                                        <rect width="34" height="34" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            Cadastrar funcionario</Link>
                    </div>
                    <div className={styles.tabelaProduto}>
                        <table>
                            <tr>
                                <th>ID do Departamento</th>
                                <th>Nome</th>
                                <th>E-mail</th>
                                <th>Cargo</th>
                                <th>Telefone</th>
                                <th>Salário</th>
                                <th></th>
                            </tr>
                        </table>
                    </div>
                </div>
            </main>


        </section>
    );
}