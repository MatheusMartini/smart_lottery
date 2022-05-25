import { useWeb3React } from "@web3-react/core";
import React, { useState, useEffect } from "react";
import { useLottery } from "../hooks/useLottery";
import { injected } from "../utils/connectors";

const Players = () => {
  const contract = useLottery();
  const [players, setPlayers] = useState([]);
  const {activate } = useWeb3React()

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

  useEffect(() => {
    if (contract) {
      contract.methods.getPlayers().call((err: any, res: any) => {
        if (err) {
          console.error(err);
        } else {
          setPlayers(res);
        }
      });
    }
  }, [contract]);

return !contract ? null : (
    <>      

      <div className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto text-center justify-center py-24" id="players">

        <div className="flex flex-col w-full ">

          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed">
              Lotteries Players
          </h3>
            <p className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center">
              Sweepstakes participants
            </p>
      
          {/* card players */}
          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6 ">
            <div className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20 ">

                {/* title */}
              <p className=" text-black-600 font-medium capitalize my-2 sm:my-7 ">
              {players.length} Address in Lottery 1
                
              </p>

                {/* list players */}

              <div className="h-60 overflow-y-auto ... lg:py-1 lg:px-4 max-w-xs ">
                {players?.map((p) => (
                      
                  <div className="max-w-xs rounded shadow-lg ">
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
