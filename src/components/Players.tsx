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
    <div className="flex justify-center ..." id="players">
      <ul>

        {players?.map((p) => (
          
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <div className="px-6 py-4 ">
            <div className="font-bold text-xs mb-2 ">{p}</div>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#value</span>
          </div>
        </div>

        ))}

      </ul>
    </div>


    </>
  );
};

export default Players;
