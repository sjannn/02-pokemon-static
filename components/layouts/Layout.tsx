import { FC } from "react"

import Head from "next/head"
import { Navbar } from "../ui";


interface Props {
    children: JSX.Element[] | JSX.Element;
    title?: string
  }

  const origin = (typeof window === 'undefined') ? '' : window.location.origin
export const Layout: FC <Props> = ({ children, title }) => {



    return (
    <>
        <Head>
            <title>{ title || 'PokemonApp'}</title>
            <meta name="author" content="Sergio Villa" />
            <meta name="description" content={`Informacion sobre el pokemon ${ title }`} />
            <meta name="keywords" content={`${ title }, pokemon, pokedex`} />

            <meta property="og:title" content={`Informacion sobre ${title}`} />
            <meta property="og:description" content={`Esta es una pagina con info sobre ${title}.`} />
            <meta property="og:image" content={`${origin}/public/img/banner.png`}/>
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
