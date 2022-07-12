import { useWeb3React } from "@web3-react/core";
import { useLottery2 } from "../../hooks/useLottery03";

const Participate = () => {
  const web3 = useWeb3React();
  const contract = useLottery2();

  return !contract ? null : (
    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      onClick={() => {
        contract.methods.enter().send({
          from: web3.account,
          value: (0.3 * 1e18).toString(),
        });
      }}
    >
      0.3 bnb
    </button>
  );
};

export default Participate;
