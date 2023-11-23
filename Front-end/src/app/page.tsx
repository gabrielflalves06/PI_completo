import Main from '@/components/main/main'
import styles from './page.module.css'
import Head from '@/components/header/header'


export default function Home() {
  return (
    <main className={styles.main}>
      <Head></Head>
      <div className={styles.body}>
        <Main />
      </div>
    </main>
  )
}
