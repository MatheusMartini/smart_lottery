
import { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import MyLottery from '../components/Lotteries'
import Players from '../components/Players'
import Guide from '../components/Guide'
import MainContainer from '../components/layout/MainContainer';
import Languages from '../components/Languages'

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
          <Guide/>
          <MyLottery/>
          <Players/>
          <Languages/>
        </MainContainer>

      </div>
    </>
  )
}

export default Home
 