import styles from '../styles/navbarLink.module.css'

export default function NavbarLink(props) {
    let classNames = styles["navbar-link"];

    if (props.last) {
        classNames = classNames.concat(" " + styles["navbar-last"])
    }
    return (
        <div className={classNames}>
            {props.children}
        </div>
    );
}
