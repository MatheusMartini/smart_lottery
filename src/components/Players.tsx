import { useWeb3React } from "@web3-react/core";
import React, { useState, useEffect } from "react";
import Web3 from "web3";
import { useLottery1 } from "../hooks/useLottery";
import { useLottery2 } from "../hooks/useLottery03";
import { useLottery3 } from "../hooks/useLottery05";
import { injected } from "../utils/connectors";

const Players = () => {
  const [web3, setWeb3] = useState()
  const {activate } = useWeb3React();

  const contract1 = useLottery1();
  const contract2 = useLottery2();
  const contract3 = useLottery3();

  const [players1, setPlayers1] = useState([]);
  const [players2, setPlayers2] = useState([]);
  const [players3, setPlayers3] = useState([]);

  const [amountLottery1, setAmountLottery1] = useState([]);
  const [amountLottery2, setAmountLottery2] = useState([]);
  const [amountLottery3, setAmountLottery3] = useState([]);

  const [lotteryHistory1, setLotteryHistory1] = useState([]);
  const [lotteryHistory2, setLotteryHistory2] = useState([]);
  const [lotteryHistory3, setLotteryHistory3] = useState([]);

  const [lotteryId1, setLotteryId1] = useState();
  const [lotteryId2, setLotteryId2] = useState();
  const [lotteryId3, setLotteryId3] = useState();
  
  const count1 = 2;
  

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
    
    // if (contract1) getHistory(count1);
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
    const a = Web3.utils.fromWei(pot,'ether')
    setAmountLottery1([a]);
  }
  const getAmount2 = async () => {
    const pot = await contract2.methods.balance().call();
    const a = Web3.utils.fromWei(pot,'ether')
    setAmountLottery2([a]);
  }
  const getAmount3 = async () => {
    const pot = await contract3.methods.balance().call();
    const a = Web3.utils.fromWei(pot,'ether')
    setAmountLottery3([a]);
  }

  // const getHistory = async (id) => {
  //   setLotteryHistory1([])
  //   for (let i = parseInt(id); i > 0; i--) {
  //     const winnerAddress = await contract1.methods.lotteryHistory(i).call()
  //     const historyObj = {}
  //     historyObj.id = i
  //     historyObj.address = winnerAddress
  //     setLotteryHistory1(lotteryHistory => [...lotteryHistory, historyObj])
  //   }
  // }
  // const [address, setAddress] = useState()
  // const [lcContract, setLcContract] = useState()
  
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
              {players1.length} Address in Lottery {lotteryId1}1 Balance of {amountLottery1}
                
              </p>

                {/* list players */}

              <div className="h-60 overflow-y-auto ... lg:py-1 lg:px-4 max-w-xs ">
                {players1?.map((p) => (
                      
                  <div key={p.length} className="max-w-xs rounded shadow-lg ">
                    <div className="py-4 ">
                      <div className="font-bold text-xs mb-2 truncate ... indent-2 ">{p}</div>
                    </div>
                  </div>

                ))}
              </div>
            </div>
            
            <div className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20 ">

                {/* title */}
              <p className=" text-black-600 font-medium capitalize my-2 sm:my-7 ">
              {players2.length} Address in Lottery {lotteryId2}2 Balance of {amountLottery2}
                
              </p>

                {/* list players */}

              <div className="h-60 overflow-y-auto ... lg:py-1 lg:px-4 max-w-xs ">
                {players2?.map((p) => (
                      
                  <div key={p.length} className="max-w-xs rounded shadow-lg ">
                    <div className="py-4 ">
                      <div className="font-bold text-xs mb-2 truncate ... indent-2 ">{p}</div>
                    </div>
                  </div>

                ))}
              </div>
            </div>

            <div className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20 ">

                {/* title */}
              <p className=" text-black-600 font-medium capitalize my-2 sm:my-7 ">
              {players3.length} Address in Lottery {lotteryId3}3 Balance of {amountLottery3}
                
              </p>

                {/* list players */}

              <div className="h-60 overflow-y-auto ... lg:py-1 lg:px-4 max-w-xs ">
                {players3?.map((p) => (
                      
                  <div key={p.length} className="max-w-xs rounded shadow-lg ">
                    <div className="py-4 ">
                      <div className="font-bold text-xs mb-2 truncate ... indent-2 ">{p}</div>
                    </div>
                  </div>

                ))}
              </div>
            </div>

          </div>
          {/* end car players */}

          <h2 className='text-base text-indigo-600 font-semibold tracking-wide '>See the latest lottery winners</h2>

          {/* card last winners */}
          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6 ">

            <div className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20 ">

                {/* title */}
              <p className=" text-black-600 font-medium capitalize my-2 sm:my-7 ">
                Last Winner {lotteryId1}
              </p>

                {/* list last winners */}

              <div className="h-10 overflow-y-auto ... lg:py-1 lg:px-4 max-w-xs ">
                {
                  (lotteryHistory1 && lotteryHistory1.length > 0) && lotteryHistory1.map(item => {
                    // console.log(item)
                    if (item.id) {
                      return (
                        <>
                        <div className="history-entry mt-2">
                          <a href={`https://testnet.bscscan.com/address/${item.address}`} target="_blank">
                              {item.address}
                          </a>
                        </div>
                      </>
                      )
                    }
                  })
                }
              </div>
            </div>

          </div>
          {/* end card last winners */}
        </div>
      </div>
    </>
  );
};

export default Players;
