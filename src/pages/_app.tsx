import type { AppProps } from 'next/app'
import { Web3ReactProvider } from "@web3-react/core";
import getLibrary from '../utils/getLibrary';
import "../../styles/globals.css";
import MainContainer from '../components/layout/MainContainer'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <Web3ReactProvider getLibrary={getLibrary} >
        <MainContainer>
          <Component {...pageProps} />
        </MainContainer>
      </Web3ReactProvider>
    </>
  )
  
}

export default MyApp
