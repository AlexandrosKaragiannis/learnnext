import styles from '../styles/navbar.module.css'
import NavbarLink from './navbarLink';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <NavbarLink>
                <img className={styles.logo} src="logo.png" />
                NoLedge
            </NavbarLink>
            <NavbarLink>
                Company
            </NavbarLink>
            <NavbarLink>
                Products
            </NavbarLink>
            <NavbarLink>
                Solutions
            </NavbarLink>
            <NavbarLink>
                Services
            </NavbarLink>
            <NavbarLink>
                Career
            </NavbarLink>
            <NavbarLink>
                Communication
            </NavbarLink>
            <NavbarLink last={true}>
                Login<i className="fas fa-door-open"></i>
            </NavbarLink>
        </nav>
    );
}
