import Image from 'next/image'
import styles from './page.module.css'
import NavBar from './components/navbar'
import Link from 'next/link'



export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Link href="notes/">Notes</Link>
      </div>
    </main>
  )
}
