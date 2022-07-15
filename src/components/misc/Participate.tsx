import { useWeb3React } from "@web3-react/core";
import { useLottery } from "../../hooks/useLottery";

const Participate = ({price, contracts}) => {
  const web3 = useWeb3React();
  const contract = useLottery(contracts);


  return !contract ? null : (
    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      onClick={() => {
        contract.methods.enter().send({
          from: web3.account,
          value: (price * 1e18).toString(),
          // gas: 300000,
        });
      }}
    >
      {price} bnb
    </button>
  );
};

export default Participate;
