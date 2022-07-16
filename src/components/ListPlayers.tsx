import { useWeb3React } from "@web3-react/core";
import React, { useState, useEffect } from "react";
import Web3 from "web3";
import { useLottery } from "../hooks/useLottery";

const ListPlayers = ({contracts, lotteryId}) => {

  const contract = useLottery(contracts);
  const [players, setPlayers] = useState([]);
  const [amountLottery, setAmountLottery] = useState([]);
  const [participating, setParticipating] = useState([]);
  const {account } = useWeb3React();

  useEffect(() => {
    updateState()
  }, [players])

  const updateState = () => {
    if (contract) getPlayersLottery(); 
    if (contract) getAmount();
    if (contract) verifyParticipating(players); 
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

  const verifyParticipating = (players) => {
    var count = 0;
    players.map(item => {
      if (item == account) {
        count++
        setParticipating([count])
      }
    }
    )
  }
return !contract ? null : (
    <>    
      <div className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20 ">
        <p className=" text-black-600 font-medium capitalize my-2 sm:my-7 ">
          {players.length} Address in Lottery {lotteryId} Balance of {amountLottery}
        </p>

        <div className="h-60 overflow-y-auto ... lg:py-1 lg:px-4 max-w-xs "> 
          {players?.map((p) => (    
            <div key={p.length} className="max-w-xs rounded shadow-lg ">
                <div className="py-4 ">
                    <div className="font-bold text-xs mb-2 truncate ... indent-2 ">{p}</div>
                </div>
            </div>
          ))}
          
        </div>
          {
            players.length && participating.length ?
              <div className="history-entry mt-2">
                <p>You participated {participating} times</p> 
                <p>Wait for the draw!</p>
              </div>
          : "To participate in the draw use the lottery above :)"}  
      </div>
    </>
  );
};

export default ListPlayers;
