import { useWeb3React } from "@web3-react/core";
import { useMemo } from "react";
import Web3 from "web3";
import { abi } from "../abi/Lottery.json";
import { AbiItem } from "web3-utils";

export const useLottery = () => {
  const web3 = useWeb3React<Web3>();

  const contract = useMemo(() => {
    if (web3.account) {
      return new web3.library!.eth.Contract(
        abi as AbiItem[],
        "0x3b2B29d80dC22E1a4B7b12d94b093c2312D04b92" // new smart contract 
      );
    }

    return null;
  }, [web3.library, web3.account]);

  return contract;
};
