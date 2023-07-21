import Link from "next/link"
import Image from "next/image"

import styles from '../styles/Navbar.module.css'

export default function Navbar() {

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Link className={styles.link_itens_poke} href="/">
                <Image src="/images/pokeball.png"
                    width="30"
                    height="30"
                    alt="PokeNext"
                />
                <h1>PokeNext</h1>
                </Link>
            </div>
            <ul className={styles.link_itens}>
                <li>
                    <Link href="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        Sobre
                    </Link>
                </li>
            </ul>
        </nav>
    )
}