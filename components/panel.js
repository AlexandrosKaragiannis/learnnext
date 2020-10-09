import styles from '../styles/panel.module.css'

export default function Navbar(props) {
    return (
        <div className={styles.panel}>
            <div className="container full-height">
                <div className={`${styles["inner-box"]} full-height`}>
                    <h3 className={styles.title}>
                        {props.title}
                    </h3>
                    <p className={styles.content}>
                        {props.content}
                    </p>
                </div>
            </div>
        </div>
    );
}
