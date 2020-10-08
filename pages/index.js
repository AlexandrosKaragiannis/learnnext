import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.body}>
      <Head>
        <title>ShoppingAddiction</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossOrigin="anonymous" />
      </Head>
      <nav className={styles.navbar}>
        <a className={styles.navbar_link}><i className="fas fa-home"></i></a>
        <a className={styles.navbar_link}>Collections</a>
        <a className={styles.navbar_link}>Brands</a>
        <a
          className={`${styles.navbar_link} ${styles.navbar_last}`}
        >
          Login<i className="fas fa-door-open"></i>
        </a>
      </nav>
      <main className={styles.main}>
        <div className={styles.jumbotron + " " + styles.blue}>
          <div className={styles.container}>
            <h1 className={styles.title}>
              Welcome to Shopping Addiction!
            </h1>
            <h2 className={styles.title_desc}>... you literally won't stop buying</h2>
            <div className={`${styles.hcenter} ${styles.mt}`}>
              <button className={styles.mainButton}>Find Out More</button>
            </div>
          </div>
        </div>
        <p>lorem</p>
        <p>lorem</p>
        <p>lorem</p>
        <p>lorem</p>
        <p>lorem</p>
        <p>lorem</p>
        <p>lorem</p>
        <p>lorem</p>
      </main>

      <footer className={styles.footer}>
        <p>made by Alex @ knowledge</p>
      </footer>
    </div >
  )
}
