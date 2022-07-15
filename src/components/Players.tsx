import { useWeb3React } from "@web3-react/core";
import React, { useState, useEffect } from "react";
import Web3 from "web3";
import { useLottery } from "../hooks/useLottery";
import { injected } from "../utils/connectors";

const Players = () => {
  const [web3, setWeb3] = useState()
  const {activate } = useWeb3React();

  const contract = useLottery("0x8500367cdd0730BE8A2A305239A2cBB40b4b8549");

  const [players, setPlayers] = useState([]);

  const [amountLottery, setAmountLottery] = useState([]);

  const [lotteryHistory, setLotteryHistory] = useState([]);

  const [lotteryId, setLotteryId] = useState();

  useEffect(() => {
    updateState()

  }, [contract])

  const updateState = () => {
    if (contract) connectWalletOnPageLoad();
    if (contract) getPlayersLottery(); 
    if (contract) getAmount(); 
    if (contract) getLotteryId();

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

  const getPlayersLottery = async () => {
    const players = await contract.methods.getPlayers().call()
    setPlayers(players)
  }

  const getAmount = async () => {
    const pot = await contract.methods.balance().call();
    const a = Web3.utils.fromWei(pot,'ether')
    setAmountLottery([a]);
  }

  const getHistory = async (id) => {
    setLotteryHistory([])
      const winnerAddress = await contract.methods.lotteryHistory(id -1).call()
      const historyObj = {address:null}
      historyObj.address = winnerAddress
      setLotteryHistory(lotteryHistory => [...lotteryHistory, historyObj])
  }

  const getLotteryId = async () => {
      const lotteryId = await contract.methods.getLotteryId().call()
      setLotteryId(lotteryId)
      await getHistory(lotteryId)
  }

return !contract ? null : (
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
              {players.length} Address in Lottery 1 Balance of {amountLottery}
                
              </p>

                {/* list players */}

              <div className="h-60 overflow-y-auto ... lg:py-1 lg:px-4 max-w-xs ">
                {players?.map((p) => (
                      
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
                Last Winner Lottery 1
              </p>

                {/* list last winners */}

              <div className="h-10 overflow-y-auto ... lg:py-1 max-w-xs ">
                {
                  lotteryHistory.map(item => {
                    if (item.address !== null) {
                      return (
                        <>
                        <div className="history-entry mt-2">
                          <a className="text-base text-indigo-600 font-semibold tracking-wide " href={`https://testnet.bscscan.com/address/${item.address}`} target="_blank">
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
