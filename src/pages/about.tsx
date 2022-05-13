import Link from 'next/link'
import Players from '../components/Players'

export default function About() {
  return (
    <>
      {/* <Link href="/">
        <a>Voltar</a>
      </Link> */}
      
        <div>
          <ul className="list-outside ...">
            <li><a className="font-bold" target="_blank" href="https://www.youtube.com/watch?v=INXklQQ-TC0">Tutorial instalação metamask</a> </li>
            <li>Passos para fazer criar a TestNet Bnb na MetaMask:</li>
            <li>Abrir a MetaMaks e clicar em NetWorks/Add NetWork</li>
            <li>Colocas os campos abaixo:</li>
            <li><span className='font-bold'>Network Name:</span> Smart Chain - Testnet</li>
            <li><span className='font-bold'>New RPC URL:</span>  https://data-seed-prebsc-1-s1.binance.org:8545/</li>
            <li><span className='font-bold'>ChainID:</span> 97</li>
            <li><span className='font-bold'>Symbol:</span> BNB</li>
            <li><span className='font-bold'>Block Explorer URL:</span>https://testnet.bscscan.com</li>
            <li>Apos isso, clicar em fazer aposta, caso nao tenha bnb na testnet clique 
              <a className="font-bold" target="_blank" href="https://testnet.binance.org/faucet-smart"> aqui </a>
            </li>
          </ul>
        </div>

    </>
  )
}
