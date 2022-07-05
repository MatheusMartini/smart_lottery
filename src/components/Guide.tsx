import React from "react";
import Image from "next/image";

const Guide = ({
    featureSvg = [
      {
        icon: "/assets/Icon/features.svg",
      },
    ],

}) => {
  return (
      <>
      {/* road map */}
      <div className='max-w-7xl mx-auto p-4 sm:p-6 lg:p-24 bg-white ' id="guide">     
        <div className='mb-16 text-center'>
          <h2 className='text-base text-indigo-600 font-semibold tracking-wide '>Guide smart lottery</h2>
          <p className='mt-2 pb-4 text-5xl lg:text-6xl font-bold tracking-tight text-gray-900'>
            Steps to participate
          </p>
        </div>

        <div className='flex flex-wrap -mx-10 items-center'>
          <div className='w-full lg:w-1/2 px-8'>
            <ul className='space-y-12'>
                <li className='flex -mx-4'>
                  <div className='px-4'>
                    <span
                      className='flex w-16 h-16 mx-auto items-center
                        justify-center text-2xl font-bold rounded-full
                        bg-blue-50 text-blue-500'
                    >
                      1
                    </span>
                  </div>
                  <div className='px-4'>
                    <h3 className='my-4 text-xl font-semibold'>Install Plugins MetaMask</h3>
                    <a href="https://www.youtube.com/watch?v=yWfZnjkhhhg" target="blank"><p className='mx-auto items-center justify-center text-blue-500'>1- Tutorial Metamask English Youtube</p></a>
                    <a href="https://www.youtube.com/watch?v=INXklQQ-TC0" target="blank"><p className='mx-auto items-center justify-center text-blue-500'>2- Tutorial Metamask Portugues Youtube</p></a>
                  </div>
                </li>
            </ul>
            <ul className='space-y-12'>
                <li className='flex -mx-4'>
                  <div className='px-4'>
                    <span
                      className='flex w-16 h-16 mx-auto items-center
                        justify-center text-2xl font-bold rounded-full
                        bg-blue-50 text-blue-500'
                    >
                      2
                    </span>
                  </div>
                  <div className='px-4'>
                    <h3 className='my-4 text-xl font-semibold'>Steps to Connect Bnb TestNet on MataMask</h3>
                    <a href="https://chainlist.org/" target="blank"><p className='mx-auto items-center justify-center text-blue-500'>1- Open Chainlist here</p></a>
                    <p className='text-gray-500 leading-loose'>2- Search in networks testnets id 97</p>
                    <p className='text-gray-500 leading-loose'>3- Click to add to matamask</p>
                  </div>
                </li>
            </ul>
            <ul className='space-y-12'>
                <li className='flex -mx-4'>
                  <div className='px-4'>
                    <span
                      className='flex w-16 h-16 mx-auto items-center
                        justify-center text-2xl font-bold rounded-full
                        bg-blue-50 text-blue-500'
                    >
                      3
                    </span>
                  </div>
                  <div className='px-4'>
                    <h3 className='my-4 text-xl font-semibold'>Get Bnb faucet</h3>
                    <a href=" https://testnet.binance.org/faucet-smart" target="blank"><p className='mx-auto items-center justify-center text-blue-500'> Binance Smart Chain Faucet here</p></a>
                  </div>
                </li>
            </ul>
            <ul className='space-y-12'>
                <li className='flex -mx-4'>
                  <div className='px-4'>
                    <span
                      className='flex w-16 h-16 mx-auto items-center
                        justify-center text-2xl font-bold rounded-full
                        bg-blue-50 text-blue-500'
                    >
                      4
                    </span>
                  </div>
                  <div className='px-4'>
                    <h3 className='my-4 text-xl font-semibold'>Participate in a lottery</h3>
                    <p className='text-gray-500 leading-loose'>You are now eligible to participate in the lottery!</p>
                    <p className='text-gray-500 leading-loose'>Good Luck!</p>
                  </div>
                </li>
            </ul>
          </div>

          <div className='w-full lg:w-1/2 px-8'>
            <div className='lg:mb-12 pb-12 lg:pb-0 mt-16 lg:mt-0 mx-6 lg:mx-0'>
              {featureSvg.map((item, index) => (
                <img key={index} src={item.icon} />
              ))}
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Guide;
