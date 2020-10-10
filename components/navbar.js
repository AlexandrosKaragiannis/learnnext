import styles from '../styles/navbar.module.css'
import NavbarLink from './navbarLink';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <NavbarLink href="/">
                <img className={styles.logo} src="logo.png" />
                NoLedge
            </NavbarLink>
            <NavbarLink href="/company">
                Company
            </NavbarLink>
            <NavbarLink href="/products">
                Products
            </NavbarLink>
            <NavbarLink href="/solutions">
                Solutions
            </NavbarLink>
            <NavbarLink href="/services">
                Services
            </NavbarLink>
            <NavbarLink href="/career">
                Career
            </NavbarLink>
            <NavbarLink href="/communication">
                Communication
            </NavbarLink>
            <NavbarLink last={true} href="signin">
                Sign In
                <i className="fas fa-door-open"></i>
            </NavbarLink>
        </nav>
    );
}
