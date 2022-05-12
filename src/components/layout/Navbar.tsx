import Link from 'next/link'
import ConnectWallet from '../ConnectWallet'

export default function Navbar() {
  return (
    <div className="flex bg-gray-200 ...">

      <div className="flex-none ...">
        
        <div>
          <ul className='flex flex-row '>
            <li className="text-black text-center px-4 py-2 m-2 ">
              <Link href="/">Home</Link>
            </li>
            <li className="text-black text-center px-4 py-2 m-2">
              <Link href="/about">Sobre</Link>
            </li>
            <li className="text-black text-center px-4 py-2 m-2">
              <Link href="/contact">Contato</Link>
            </li>
          </ul> 
        </div>

      </div>
      
      <div className="flex-auto ..."></div>
      
        <div className='flex flex-row'>
          <ConnectWallet/>
        </div>
    
    </div>
    
  )
}
