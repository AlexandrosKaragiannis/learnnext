import Head from 'next/head'
import Navbar from '../components/navbar'
import styles from '../styles/layout.module.css'

export default function Layout(props) {
    return (
        <div className={styles.body}>
            <Head>
                <title>NoLedge</title>
                <link rel="icon" href="/favicon.ico" />
                <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossOrigin="anonymous" />
            </Head>
            <Navbar />

            {props.children}

            <footer className={styles.footer}>
                <p>made by Alex @ knowledge</p>
            </footer>
        </div >
    );
}
