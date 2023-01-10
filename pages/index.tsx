import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Lasisi's Portfolio</title>
      </Head>
      <h1>Lets build an awesome portfolio</h1>
    </>
  )
}
