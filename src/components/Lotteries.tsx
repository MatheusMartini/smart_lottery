import React, { useEffect, useState } from "react";
import Image from "next/image";
import Participate from "./misc/Participate";
import Participate03 from "./misc/Participate0.3";
import Participate05 from "./misc/Participate0.5";
import PickWinner from "./misc/PickWinner";
import PickWinner03 from "./misc/PickWinner03";
import PickWinner05 from "./misc/PickWinner05";
import { useWeb3React } from "@web3-react/core";
import { useLottery1 } from "../hooks/useLottery";

const Lotteries = () => {
    const {active, account} = useWeb3React();

    const contract = useLottery1();
    
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
                    {/* descrições da loteria */}
                  <ul className="flex flex-col list-inside pl-6 xl:pl-0 text-center text-black-500 flex-grow">
                    <li className="relative check custom-list my-2">
                      Buy a ticket and win the prize of: amount contract
                    </li>
                  </ul>
                    {/* botão para chamar contrato */}
                  <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                    <p className="text-2xl text-black-600 text-center mb-4 ">
                      <Participate/>
                    </p>
                      {account == owner ?<PickWinner/>: ""}
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
                    {/* descrições da loteria */}
                  <ul className="flex flex-col list-inside pl-6 xl:pl-0 text-center text-black-500 flex-grow">
                    <li className="relative check custom-list my-2">
                      Buy a ticket and win the prize of: amount contract
                    </li>
                  </ul>
                    {/* botão para chamar contrato */}
                  <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                    <p className="text-2xl text-black-600 text-center mb-4 ">
                      <Participate03/>
                    </p>
                      {account == owner ?<PickWinner03/>: ""}
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
                    {/* descrições da loteria */}
                  <ul className="flex flex-col list-inside pl-6 xl:pl-0 text-center text-black-500 flex-grow">
                    <li className="relative check custom-list my-2">
                      Buy a ticket and win the prize of: amount contract
                    </li>
                  </ul>
                    {/* botão para chamar contrato */}
                  <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                    <p className="text-2xl text-black-600 text-center mb-4 ">
                      <Participate05/>
                    </p>
                      {account == owner ?<PickWinner05/>: ""}
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
