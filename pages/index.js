import Head from 'next/head'
import Navbar from '../components/navbar'
import PanelList from '../components/panelList'
import styles from '../styles/home.module.css'

export default function Home() {
  return (
    <div className={styles.body}>
      <Head>
        <title>NoLedge</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossOrigin="anonymous" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <div className="container-large">
          <div className={styles.jumbotron}>
            <div className="container">
              <h1 className={styles.title}>
                Welcome to NoLedge!
              </h1>
              <div className={`hcenter ${styles.mt}`}>
                <button className={styles.mainButton}>Find Out More</button>
              </div>
            </div>
          </div>
        </div>
        <PanelList />
      </main>

      <footer className={styles.footer}>
        <p>made by Alex @ knowledge</p>
      </footer>
    </div >
  );
}
