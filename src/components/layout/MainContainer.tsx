import Navbar from './Navbar'
import Footer from './Footer'

export default function Contact({ children }) {
  return (
    <>
      <Navbar />
        <div className='flex justify-center '>
          <div>
            {children}
          </div>
        </div>
      <Footer />
    </>
  )
}
