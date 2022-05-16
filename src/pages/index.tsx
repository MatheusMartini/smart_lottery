import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Players from '../components/Players'

const Home: NextPage = () => {
  return (
    <>      
      <div>
        <Head>
          <title>Smart Lottery</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <About/>
        <Contact/>
        <Players/>

      </div>
    </>
  )
}

export default Home
 