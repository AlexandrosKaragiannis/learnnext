import styles from '../styles/navbarLink.module.css'
import Link from 'next/link'

export default function NavbarLink(props) {
    let classNames = styles["navbar-link"];
    let href = "";

    if (props.last) {
        classNames = classNames.concat(" " + styles["navbar-last"])
    }

    if (props.href) {
        href = props.href;
    }

    return (
        <Link href={href}>
            <div className={classNames}>
                {props.children}
            </div>
        </Link >
    );
}
