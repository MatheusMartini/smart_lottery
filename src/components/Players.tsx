import { useWeb3React } from "@web3-react/core";
import React, { useState, useEffect } from "react";
import Web3 from "web3";
import { useLottery } from "../hooks/useLottery";
import { injected } from "../utils/connectors";
import ListPlayers from "./ListPlayers";
import ListLastWinners from "./ListLastWinners";

const Players = () => {
  const {activate } = useWeb3React();

  const contract = useLottery("0x8500367cdd0730BE8A2A305239A2cBB40b4b8549");

  useEffect(() => {
    updateState()
  }, [contract])

  const updateState = () => {
    if (contract) connectWalletOnPageLoad(); 
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
            <ListPlayers contracts={"0x8500367cdd0730BE8A2A305239A2cBB40b4b8549"} lotteryId={1}/>
            <ListPlayers contracts={"0x5d6dB8D5c7fE61b53Ed02Dc0dEE5a66f751dc5A5"} lotteryId={2}/>
            <ListPlayers contracts={"0x5B76090a3637f343A7c30719f642a3f37e49c586"} lotteryId={3}/>
          </div>
          {/* end car players */}

          <h2 className='text-base text-indigo-600 font-semibold tracking-wide '>See the latest lottery winners</h2>

          {/* card last winners */}
          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6 ">
            <ListLastWinners contracts={"0x8500367cdd0730BE8A2A305239A2cBB40b4b8549"} lotteryId={1}/>
            <ListLastWinners contracts={"0x5d6dB8D5c7fE61b53Ed02Dc0dEE5a66f751dc5A5"} lotteryId={2}/>
            <ListLastWinners contracts={"0x5B76090a3637f343A7c30719f642a3f37e49c586"} lotteryId={3}/>
          </div>
          {/* end card last winners */}
        </div>
      </div>
    </>
  );
};

export default Players;
