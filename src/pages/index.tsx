
import { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import Lottery from '../components/Lotteries'
import Players from '../components/Players'
import Tutorial from '../components/Tutorial'

const Home: NextPage = () => {
  return (
    <>      
      <div>
        <Head>
          <title>Smart Lottery</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <About/>
        <Tutorial/>
        <Lottery/>
        <Players/>

      </div>
    </>
  )
}

export default Home
 