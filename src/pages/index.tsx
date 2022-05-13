import type { NextPage } from 'next'
import Players from '../components/Players'

const Home: NextPage = () => {
  return (
    <>      
      <div className="flex justify-start ...">

        <div>
          <Players/>
        </div>
      </div>
    </>
  )
}

export default Home
 