import { useWeb3React } from "@web3-react/core";
import { useEffect } from "react";
import { injected } from "../utils/connectors";

const ConnectWallet = () => {
  const { active, account, library, connector, activate, deactivate } = useWeb3React()
  
  async function loginLogout(){
    if(localStorage.getItem('isWalletConnected') == 'false' ){
      connect()
    }else {
      disconnect()
    } 
  }

  async function connect() {
    try {
      await activate(injected)
      localStorage.setItem('isWalletConnected', 'true')
    } catch (ex) {
      console.log(ex)
    }
  }

  async function disconnect() {
    try {
      deactivate()
      localStorage.setItem('isWalletConnected', 'false')
    } catch (ex) {
      console.log(ex)
    }
  }

  useEffect(() => {
    const connectWalletOnPageLoad = async () => {
      if (localStorage?.getItem('isWalletConnected') === 'true') {
        try {
          await activate(injected)
          localStorage.setItem('isWalletConnected', 'true')
        } catch (ex) {
          console.log(ex)
        }
      }
    }
    connectWalletOnPageLoad()
  }, [])

  return (
    <>
      <div className="flex justify-center ...">

        <button onClick={loginLogout} className=" hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          {!account ? "Connect Wallet" : "Disconnect"}
        </button>
        </div>
    </>
  );
};

export default ConnectWallet;
