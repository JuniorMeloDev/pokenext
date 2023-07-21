import styles from '../styles/Home.module.css'

import Image from 'next/image'
import Card from '../components/Card'


export async function getStaticProps() {

  // limitando o numero de Pokemons apresentados
  const maxPokemons = 251
  // api onde está os dados
  const api = 'https://pokeapi.co/api/v2/pokemon'

  // requisição da api com a chamada limitando os pokemons
  const res = await fetch(`${api}/?limit=${maxPokemons}`)

  // chamando os dados - transformando em um array de objetos
  const data = await res.json()

  // criando um index para adicionar os pokemons
  data.results.forEach((item, index) => {
    item.id = index + 1
  })

  return {
    props: {
      pokemons: data.results
    }
  }
}

export default function Home({ pokemons }) {
  return (
    <div>
      <div className={styles.title_container}>
        <h1 className={styles.title}>Poke<span>Next</span></h1>
        <Image src="/images/pokeball.png"
          width="50"
          height="50"
          alt='PokeNext'
        />
      </div>
      <div className={styles.pokemon_container}>
        {pokemons.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  )
}
