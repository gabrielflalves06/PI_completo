import Image from "next/image"
import styles from "./header.module.css"

export default function Head() {

    return (
        <div className={styles.header_container}>
            <div className={styles.slogan}>
                <Image
                    src="/logo.svg"
                    alt="Think&Share slogan"
                    width={130}
                    height={85}
                />


            </div>
            <div className={styles.menu}>
                <input type="checkbox" id="menu" className={styles.bottom} />
                <label htmlFor="menu">
                    <span className={styles.menu_hamburguer}></span>
                </label>

                <ul className={styles.lista_menu}>
                    <li className={styles.menu_itens}>
                        <a href="#" target="centro" className="lista-menu__link">Cadastrar</a>
                    </li>
                    <li className={styles.menu_itens}>
                        <a href="#" target="centro" className="lista-menu__link">Listar</a>
                    </li>
                    <li className={styles.menu_itens}>
                        <a href="#" target="centro" className="lista-menu__link">Deletar</a>
                    </li>
                    <li className={styles.menu_itens}>
                        <a href="#" target="centro" className="lista-menu__link">Editar</a>
                    </li>
                </ul>
            </div>

        </div >
    )
}