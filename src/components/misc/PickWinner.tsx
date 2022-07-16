import { useWeb3React } from "@web3-react/core";
import { useLottery } from "../../hooks/useLottery";

const PickWinner = ({contracts}) => {
  const web3 = useWeb3React();
  const contract = useLottery(contracts);

  const pick = async () => {
    await contract.methods.pickWinner().send({
      from: web3.account,
    });
    window.location.reload()
}

  return !contract ? null : (
    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
    onClick={pick}
    >
      Pick Winner
    </button>
  );
};

export default PickWinner;
