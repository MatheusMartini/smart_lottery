import { useWeb3React } from "@web3-react/core";
import React, { useState, useEffect } from "react";
import Web3 from "web3";
import { useLottery1 } from "../hooks/useLottery";
import { useLottery2 } from "../hooks/useLottery03";
import { useLottery3 } from "../hooks/useLottery05";
import { injected } from "../utils/connectors";

const Players = () => {
  const contract1 = useLottery1();
  const contract2 = useLottery2();
  const contract3 = useLottery3();

  const [players1, setPlayers1] = useState([]);
  const [players2, setPlayers2] = useState([]);
  const [players3, setPlayers3] = useState([]);

  const [amountLottery1, setAmountLottery1] = useState();
  const [amountLottery2, setAmountLottery2] = useState();
  const [amountLottery3, setAmountLottery3] = useState();

  const [web3, setWeb3] = useState()
  const {activate } = useWeb3React();

  const [lotteryHistory, setLotteryHistory] = useState([]);

  const [lotteryId, setLotteryId] = useState();
  

  useEffect(() => {
    updateState()
  }, [contract1])

  const updateState = () => {
    if (contract1) connectWalletOnPageLoad();
    
    if (contract1) getPlayersLottery1(); 
    if (contract2) getPlayersLottery2(); 
    if (contract3) getPlayersLottery3(); 

    if (contract1) getAmount1(); 
    if (contract2) getAmount2(); 
    if (contract3) getAmount3(); 
  }

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

  const getPlayersLottery1 = async () => {
    const players = await contract1.methods.getPlayers().call()
    setPlayers1(players)
  }
  const getPlayersLottery2 = async () => {
    const players = await contract2.methods.getPlayers().call()
    setPlayers2(players)
  }
  const getPlayersLottery3 = async () => {
    const players = await contract3.methods.getPlayers().call()
    setPlayers3(players)
  }


  const getAmount1 = async () => {
    const pot = await contract1.methods.balance().call();
    setAmountLottery1(Web3.utils.fromWei(pot,'ether'));
  }
  const getAmount2 = async () => {
    const pot = await contract2.methods.balance().call();
    setAmountLottery2(Web3.utils.fromWei(pot,'ether'));
  }
  const getAmount3 = async () => {
    const pot = await contract3.methods.balance().call();
    setAmountLottery3(Web3.utils.fromWei(pot,'ether'));
  }

  const [address, setAddress] = useState()
  const [lcContract, setLcContract] = useState()
  
  // const connectWalletHandler = async () => {

  //   /* check if MetaMask is installed */
  //   if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  //     try {
  //       /* request wallet connection */
  //       await window.ethereum.request({ method: "eth_requestAccounts"})
  //       /* create web3 instance & set to state */
  //       const a = new Web3(window.ethereum)
  //       /* set web3 instance in React state */
  //       setWeb3(a)
  //       /* get list of accounts */
  //       const accounts = await web3.eth.getAccounts()
  //       /* set account 1 to React state */
  //       setAddress(accounts[0])

  //       /* create local contract copy */
  //       const lc = lotteryContract(web3)
  //       setLcContract(lc) 

  //       window.ethereum.on('accountsChanged', async () => {
  //         const accounts = await web3.eth.getAccounts()
  //         console.log(accounts[0])
  //         /* set account 1 to React state */
  //         setAddress(accounts[0])
  //       })
  //     } catch(err) {
  //       console.log(err.message)
  //     }
  //   } else {
  //     /* MetaMask is not installed */
  //     console.log("Please install MetaMask")
  //   }
  // }

return !contract1 ? null : (
    <>    
      <div className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto text-center justify-center py-24" id="players">

        <div className="flex flex-col w-full ">

        <h2 className='text-base text-indigo-600 font-semibold tracking-wide '>Sweepstakes participants</h2>
          <p className='mt-2 pb-4 text-5xl lg:text-5xl font-bold tracking-tight text-gray-900'>
            Lotteries Players
          </p>
      
          {/* card players */}
          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6 ">

            <div className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20 ">

                {/* title */}
              <p className=" text-black-600 font-medium capitalize my-2 sm:my-7 ">
              {players1.length} Address in Lottery {lotteryId}1 Balance of {amountLottery1}
                
              </p>

                {/* list players */}

              <div className="h-60 overflow-y-auto ... lg:py-1 lg:px-4 max-w-xs ">
                {players1?.map((p) => (
                      
                  <div key={p.length} className="max-w-xs rounded shadow-lg ">
                    <div className="py-4 ">
                      <div className="font-bold text-xs mb-2 truncate ... indent-2 ">{p}</div>
                    </div>
                    <div className="pt-4 pb-2">
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#value</span>
                    </div>
                  </div>

                ))}
              </div>
            </div>
            
            <div className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20 ">

                {/* title */}
              <p className=" text-black-600 font-medium capitalize my-2 sm:my-7 ">
              {players2.length} Address in Lottery {lotteryId}2 Balance of {amountLottery2}
                
              </p>

                {/* list players */}

              <div className="h-60 overflow-y-auto ... lg:py-1 lg:px-4 max-w-xs ">
                {players2?.map((p) => (
                      
                  <div key={p.length} className="max-w-xs rounded shadow-lg ">
                    <div className="py-4 ">
                      <div className="font-bold text-xs mb-2 truncate ... indent-2 ">{p}</div>
                    </div>
                    <div className="pt-4 pb-2">
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#value</span>
                    </div>
                  </div>

                ))}
              </div>
            </div>

            <div className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20 ">

                {/* title */}
              <p className=" text-black-600 font-medium capitalize my-2 sm:my-7 ">
              {players3.length} Address in Lottery {lotteryId}3 Balance of {amountLottery3}
                
              </p>

                {/* list players */}

              <div className="h-60 overflow-y-auto ... lg:py-1 lg:px-4 max-w-xs ">
                {players3?.map((p) => (
                      
                  <div key={p.length} className="max-w-xs rounded shadow-lg ">
                    <div className="py-4 ">
                      <div className="font-bold text-xs mb-2 truncate ... indent-2 ">{p}</div>
                    </div>
                    <div className="pt-4 pb-2">
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#value</span>
                    </div>
                  </div>

                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  );
};

export default Players;
