import Image from "next/image"

import styles from '../styles/About.module.css'

export default function about() {

    return (
        <div className={styles.about}>
            <h1>About</h1>
            <p>Esse projeto foi feito em NextJs com Api externa do PokéApi. Foi utilizado vários conceitos fundamentais do NextJs junto com o React. Foram criados componentes e páginas dinâmicas. Espero que gostem desse projeto. Até a próxima 😃👍. 
                <Image src="/images/charizard.png"
                width="300"
                height="300"
                alt="Charizard" />
            </p>
        </div>
    )
}