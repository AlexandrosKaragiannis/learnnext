import styles from '../styles/panelList.module.css'
import Panel from './panel'

export default function PanelList() {
    return (
        <div className="container">
            <div className={styles["panel-container"]}>
                <Panel
                    title="Contact Us"
                    content="Find us at our store or call our customer service at +0306970000000"
                    imgurl="https://images.unsplash.com/photo-1525598912003-663126343e1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                />
                <Panel
                    title="Customer Support"
                    content="Our employees do their best to help you, 24 hours a day"
                    imgurl="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80"
                />
                <Panel
                    title="Business Partners"
                    content="Supported by Gooble, Amason and many others"
                    imgurl="https://images.unsplash.com/photo-1528238646472-f2366160b6c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
                />
            </div>
        </div>
    );
}
