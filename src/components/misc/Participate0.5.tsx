import { useWeb3React } from "@web3-react/core";
import { useLottery3 } from "../../hooks/useLottery05";

const Participate = () => {
  const web3 = useWeb3React();
  const contract = useLottery3();

  return !contract ? null : (
    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      onClick={() => {
        contract.methods.enter().send({
          from: web3.account,
          value: (0.5 * 1e18).toString(),
        });
      }}
    >
      0.5 bnb
    </button>
  );
};

export default Participate;
