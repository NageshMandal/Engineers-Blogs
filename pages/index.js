import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Engineers blogs</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className={styles.mainnav}>
        <ul>
          <li>Home</li>
          <li>Contact</li>
          <li>Opportunity</li>
        </ul>
      </nav>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Engineers <a href="https://github.com/NageshMandal">blogs</a>
        </h1>

        <p className={styles.description}>
          A blog for code Engineer by a coder
        </p>
      <div className='blogs'>
        <div className='blogitem'>
        </div>
        <div className='blogitem'>
        </div>
        <div className='blogitem'>
        </div>
      </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
