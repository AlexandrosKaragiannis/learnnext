import Layout from '../components/layout'
import PanelList from '../components/panelList'
import styles from '../styles/home.module.css'

export default function Home() {
  return (
    <Layout>
      <main className={`${styles.main} page`}>
        <div className="container-large">
          <div className={styles.jumbotron}>
            <div className="container">
              <h1 className={styles.title}>
                Welcome to NoLedge!
              </h1>
              <div className={`hcenter ${styles.mt}`}>
                <button className={styles["main-button"]}>Find Out More</button>
              </div>
            </div>
          </div>
        </div>
        <PanelList />
      </main>
    </Layout>
  );
}
