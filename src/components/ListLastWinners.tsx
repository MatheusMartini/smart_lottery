import React, { useState, useEffect } from "react";
import { useLottery } from "../hooks/useLottery";

const ListLastWinners = ({contracts, lotteryId}) => {

  const contract = useLottery(contracts);
  const [lotteryHistory, setLotteryHistory] = useState([]);

  useEffect(() => {
    updateState()
  }, [contract])

  const updateState = () => {
    if (contract) getLotteryId(); 
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
      // setLotteryId(lotteryId)
      await getHistory(lotteryId)
  }
  
return !contract ? null : (
    <>    
        <div className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 ">

            {/* title */}
            <p className="text-black-600 font-medium capitalize my-2 sm:my-7 ">
                Last Winner Lottery {lotteryId}
            </p>

            {/* list last winners */}

            <div className="h-10 overflow-y-auto ... lg:py-1 max-w-xs ">
            {
                lotteryHistory.map(item => {
                if (item.address !== "0x0000000000000000000000000000000000000000") {
                    return (
                    <>
                      <div className="history-entry mt-2">
                          <a className="text-base text-indigo-600 font-semibold tracking-wide " href={`https://testnet.bscscan.com/address/${item.address}`} target="_blank">
                              {item.address}
                          </a>
                      </div>
                    </>
                    )
                }else{
                  return(
                      <p>Still no Winners this one</p>
                    )
                  }
                }
              )
            }
            </div>
        </div>
    </>
  );
};

export default ListLastWinners;
