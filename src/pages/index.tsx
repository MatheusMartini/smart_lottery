import type { NextPage } from 'next'
import ConnectWallet from '../components/ConnectWallet'
import Participate from '../components/Participate'
import About from './about'
import Contact from './contact'

const Home: NextPage = () => {
  return (
    <>      
      <div>

        <About/>
        <Contact/>
        
      </div>
    </>
  )
}

export default Home
 