import { useWeb3React } from "@web3-react/core";
import { useState } from "react";
import { useLottery2 } from "../../hooks/useLottery03";

const PickWinner = () => {
  const web3 = useWeb3React();
  const contract = useLottery2();

  const [owner, setOwner] = useState();

  const getOwner = async () => {
    const owner = await contract.methods.owner().call()
    setOwner(owner);
  }

  // if(window.ethereum.selectedAddress == owner){

  // }

  // console.log(contract.methods.OWNER().call()) log do endereço owner
  return !contract ? null : (
    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
    onClick={() => {
        contract.methods.pickWinner().send({
          from: web3.account,
        });
      }}
    >
      Pick Winner
    </button>
  );
};

export default PickWinner;
