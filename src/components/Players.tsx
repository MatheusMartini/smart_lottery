import { useWeb3React } from "@web3-react/core";
import React, { useState, useEffect } from "react";
import Web3 from "web3";
import { useLottery } from "../hooks/useLottery";
import { injected } from "../utils/connectors";

const Players = () => {
  const contract = useLottery();
  const [web3, setWeb3] = useState()
  const {activate } = useWeb3React();

  const [players, setPlayers] = useState([]);

  const [amountLottery, setAmountLottery] = useState();

  const [lotteryHistory, setLotteryHistory] = useState([]);

  const [lotteryId, setLotteryId] = useState();
  

  useEffect(() => {
    updateState()
  }, [contract])

  const updateState = () => {
    if (contract) connectWalletOnPageLoad();
    if (contract) getPlayers(); 
    if (contract) getAmount(); 
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

  const getPlayers = async () => {
    const players = await contract.methods.getPlayers().call()
    setPlayers(players)
  }

  const getAmount = async () => {
    const pot = await contract.methods.balance().call();
    setAmountLottery(Web3.utils.fromWei(pot,'ether'));
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
              {players.length} Address in Lottery {lotteryId}1 Balance of {amountLottery}
                
              </p>

                {/* list players */}

              <div className="h-60 overflow-y-auto ... lg:py-1 lg:px-4 max-w-xs ">
                {players?.map((p) => (
                      
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

            
            {/* duplicar a div de cima quando estiver estilizada */}

          </div>

        </div>
      </div>
    </>
  );
};

export default Players;
