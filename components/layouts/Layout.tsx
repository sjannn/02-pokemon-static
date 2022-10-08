import { FC } from "react"

import Head from "next/head"
import { Navbar } from "../ui";


interface Props {
    children: JSX.Element[] | JSX.Element;
    title?: string
  }

export const Layout: FC <Props> = ({ children, title }) => {
  return (
    <>
        <Head>
            <title>{ title || 'PokemonApp'}</title>
            <meta name="author" content="Sergio Villa" />
            <meta name="description" content={`Informacion sobre el pokemon ${ title }`} />
            <meta name="keywords" content={`${ title }, pokemon, pokedex`} />
        </Head>

        <Navbar />

        <main style={
          {padding: '0px 20px'}
        }>
            { children }
        </main>

    </>
  )
}
