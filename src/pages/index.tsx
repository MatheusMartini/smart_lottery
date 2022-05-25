import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import Lottery from '../components/Lotteries'
import Players from '../components/Players'
import Tutorial from '../components/Tutorial'
import MainContainer from '../components/layout/MainContainer';

const Home: NextPage = () => {
  return (
    <>      
      <div>
        <Head>
          <title>Smart Lottery</title>
          <link rel="icon" href="/logo.ico" />
        </Head>

        <MainContainer>
          <About/>
          <Tutorial/>
          <Lottery/>
          <Players/>
        </MainContainer>

      </div>
    </>
  )
}

export default Home
 