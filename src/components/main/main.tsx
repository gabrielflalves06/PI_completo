import styles from "./main.module.css"

export default function Main() {
    return (
        <main className={styles.main_container}>
            <iframe
                src="/src/components/cadastro/cadastro.tsx"
            ></iframe>
        </main >
    )

}