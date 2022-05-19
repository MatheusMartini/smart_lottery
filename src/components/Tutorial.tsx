import React from "react";
import Image from "next/image";

const Tutorial = () => {
  return (
      <>
        <div className="bg-gradient-to-b from-white-300 to-white-500 w-full py-32"id="tutorials">
            <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
                
                <div className="flex flex-col w-full">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed">
                        MetaMask Tutorials
                    </h3>
                
                {/* card tutorials */}
                <div className="grid grid-flow-row sm:grid-flow-col   gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">

                    <div className="flex flex-col border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-10">
                        {/* title tutorial */}
                    <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                        Tutorial En
                    </p>
                        <div>
                            <ul className="list-outside ...">
                                <li><a className="font-bold" target="_blank" href="https://www.youtube.com/watch?v=yWfZnjkhhhg">Metamask installation tutorial youtube</a> </li>
                                <li>Steps to create TestNet Bnb in MetaMask:</li>
                                <li>Open MetaMaks and click on NetWorks/Add NetWork</li>
                                <li>Enter the fields below:</li>
                                <li><span className='font-bold'>Network Name:</span> Smart Chain - Testnet</li>
                                <li><span className='font-bold'>New RPC URL:</span>  https://data-seed-prebsc-1-s1.binance.org:8545/</li>
                                <li><span className='font-bold'>ChainID:</span> 97</li>
                                <li><span className='font-bold'>Symbol:</span> BNB</li>
                                <li><span className='font-bold'>Block Explorer URL:</span>https://testnet.bscscan.com</li>
                                <li>After that, click on place bet, if you don't have a bnb on testnet click
                                <a className="font-bold" target="_blank" href="https://testnet.binance.org/faucet-smart"> here </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-10">
                        {/* title tutorial    */}
                    <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                        Tutorial Pt
                    </p>
                        <div>
                            <ul className="list-outside ...">
                                <li><a className="font-bold" target="_blank" href="https://www.youtube.com/watch?v=INXklQQ-TC0">Tutorial instalação metamask youtube</a> </li>
                                <li>Passos para fazer criar a TestNet Bnb na MetaMask:</li>
                                <li>Abrir a MetaMaks e clicar em NetWorks/Add NetWork</li>
                                <li>Colocas os campos abaixo:</li>
                                <li><span className='font-bold'>Network Name:</span> Smart Chain - Testnet</li>
                                <li><span className='font-bold'>New RPC URL:</span>  https://data-seed-prebsc-1-s1.binance.org:8545/</li>
                                <li><span className='font-bold'>ChainID:</span> 97</li>
                                <li><span className='font-bold'>Symbol:</span> BNB</li>
                                <li><span className='font-bold'>Block Explorer URL:</span>https://testnet.bscscan.com</li>
                                <li>Apos isso, clicar em fazer aposta, caso nao tenha bnb na testnet clique 
                                <a className="font-bold" target="_blank" href="https://testnet.binance.org/faucet-smart"> aqui </a>
                                </li>
                            </ul>
                        </div>


                    </div>
                
                </div>

                </div>

            </div>
        </div>
    </>
  );
};

export default Tutorial;
