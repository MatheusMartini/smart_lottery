import React, { useEffect, useState } from "react";
import Image from "next/image";
import Participate from "./misc/Participate";
import PickWinner from "./misc/PickWinner";
import { useWeb3React } from "@web3-react/core";
import { useLottery } from "../hooks/useLottery";

const Lotteries = () => {
    const {active, account} = useWeb3React();

    const contract = useLottery("0x8500367cdd0730BE8A2A305239A2cBB40b4b8549");
    
    useEffect(() => {
      getOwner()
    });

    const [owner, setOwner] = useState();
  
    const getOwner = async () => {
      try {
        const owner = await contract.methods.OWNER().call()
        setOwner(owner);
      } catch (error) {
        console.log(error)
        null
      }

    }
    
    return (
    <>
      {active ?
        <div className="bg-gradient-to-b from-white-300 to-white-500 w-full py-24"id="lotteries">
          <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
            
            <div className="flex flex-col w-full">

              <h2 className='text-base text-indigo-600 font-semibold tracking-wide '>Participate in blockchain sweepstakes!</h2>
              <p className='mt-2 pb-4 text-5xl lg:text-5xl font-bold tracking-tight text-gray-900'>
                Choose Your Lottery
              </p>
        
              {/* card das loterias */}
              <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">

                <div className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-10">
                  {/* trocar imagem talvez */}
                  <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                    <Image
                      src="/assets/Free.png"
                      width={145}
                      height={165}
                      alt="Free Plan"
                      />
                  </div>
                    {/* titulo da loteria    */}
                  <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                    Lottery 1
                  </p>
                    {/* descri????es da loteria */}
                  <ul className="flex flex-col list-inside pl-6 xl:pl-0 text-center text-black-500 flex-grow">
                    <li className="relative check custom-list my-2">
                      Buy a ticket to participate in the lottery
                    </li>
                  </ul>
                    {/* bot??o para chamar contrato */}
                  <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                    <p className="text-2xl text-black-600 text-center mb-4 ">
                      <Participate price={0.1} contracts={"0x8500367cdd0730BE8A2A305239A2cBB40b4b8549"}/>
                    </p>
                      {account == owner ?<PickWinner contracts={"0x8500367cdd0730BE8A2A305239A2cBB40b4b8549"}/>: ""}
                  </div>
                </div>

                <div className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-10">
                  {/* trocar imagem talvez */}
                  <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                    <Image
                      src="/assets/Free.png"
                      width={145}
                      height={165}
                      alt="Free Plan"
                      />
                  </div>
                    {/* titulo da loteria    */}
                  <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                    Lottery 2
                  </p>
                    {/* descri????es da loteria */}
                  <ul className="flex flex-col list-inside pl-6 xl:pl-0 text-center text-black-500 flex-grow">
                    <li className="relative check custom-list my-2">
                      Buy a ticket to participate in the lottery
                    </li>
                  </ul>
                    {/* bot??o para chamar contrato */}
                  <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                    <p className="text-2xl text-black-600 text-center mb-4 ">
                      <Participate price={0.3} contracts={"0x5d6dB8D5c7fE61b53Ed02Dc0dEE5a66f751dc5A5"}/>
                    </p>
                      {account == owner ?<PickWinner contracts={"0x5d6dB8D5c7fE61b53Ed02Dc0dEE5a66f751dc5A5"}/>: ""}
                  </div>
                </div>

                <div className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-10">
                  {/* trocar imagem talvez */}
                  <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                    <Image
                      src="/assets/Free.png"
                      width={145}
                      height={165}
                      alt="Free Plan"
                      />
                  </div>
                    {/* titulo da loteria    */}
                  <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                    Lottery 3
                  </p>
                    {/* descri????es da loteria */}
                  <ul className="flex flex-col list-inside pl-6 xl:pl-0 text-center text-black-500 flex-grow">
                    <li className="relative check custom-list my-2">
                      Buy a ticket to participate in the lottery
                    </li>
                  </ul>
                    {/* bot??o para chamar contrato */}
                  <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                    <p className="text-2xl text-black-600 text-center mb-4 ">
                      <Participate price={0.5} contracts={"0x5B76090a3637f343A7c30719f642a3f37e49c586"}/>
                    </p>
                      {account == owner ?<PickWinner contracts={"0x5B76090a3637f343A7c30719f642a3f37e49c586"}/>: ""}
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      : ""}
    </>
  );
};

export default Lotteries;
