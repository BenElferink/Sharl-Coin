import Head from 'next/head'
import { type AppProps } from 'next/app'
import { Fragment } from 'react'
import '@/styles/globals.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Fragment>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />

        <link rel='icon' type='image/x-icon' href='/favicon.ico' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='manifest' href='/manifest.json' />

        <title>$SHARL</title>
        <meta name='description' content='$Sharl Huskensan - Cardonzo Founder' />
        <meta name='keywords' content='cardano, blockchain, sharl, charles hoskinson, meme, coin, memecoin, community' />
      </Head>

      <Component {...pageProps} />
    </Fragment>
  )
}

export default App
