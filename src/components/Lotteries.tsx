import React from "react";
import Image from "next/image";
import Participate from "./misc/Participate";

import { useWeb3React } from "@web3-react/core";

const Contact = () => {
    const {active} = useWeb3React();
    
    return (
    <div className="bg-gradient-to-b from-white-300 to-white-500 w-full py-20"id="contact">
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        
        <div className="flex flex-col w-full">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed">
            Choose Your Lottery
          </h3>
          <p className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center">
            Escolha uma loteria para realizar a aposta
          </p>
          <p> {active ? "" : "Connect wallet primeiro"}</p>
          
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
                  buy a ticket and win the prize of: amount contract
                </li>
              </ul>
                {/* botão para chamar contrato */}
              <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                <p className="text-2xl text-black-600 text-center mb-4 ">
                  {active ? <Participate/> : ""}
                </p>
            
              </div>
            </div>

            <div className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20">
              <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                <Image
                  src="/assets/Standard.png"
                  width={145}
                  height={165}
                  alt="Standard Plan"
                />
              </div>
              <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                Lottery 2{" "}
              </p>
              <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                <li className="relative check custom-list my-2">
                  Unlimited Bandwitch
                </li>
              </ul>
              <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                <p className="text-2xl text-black-600 text-center mb-4 ">
                  Enter 0.3
                </p>
                
              </div>
            </div>

            <div className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20">
              <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                <Image
                  src="/assets/Premium.png"
                  width={145}
                  height={165}
                  alt="Premium Plan"
                />
              </div>
              <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                Lottery 3{" "}
              </p>
              <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                <li className="relative check custom-list my-2">
                  Unlimited Bandwitch
                </li>
              </ul>
              <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                <p className="text-2xl text-black-600 text-center mb-4 ">
                  Enter 0.5
                </p>

              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Contact;
