import React from "react";
import Image from "next/image";

const Tutorial = ({

    roadMap = [
        {
          title: `Install Plugins MetaMask`,
          description: `
          Tutorial Metamask Aqui
          https://www.youtube.com/watch?v=yWfZnjkhhhg
          https://www.youtube.com/watch?v=INXklQQ-TC0
          `,
        },
        {
          title: `Connect Bnb TestNet on MataMask`,
          description: `Connect Chainlist aqui`,
        },
        {
          title: `Get free Bnb `,
          description: `
            faucet bnb aqui
            https://testnet.binance.org/faucet-smart
          `,
        },
        {
          title: `Participate in a lottery`,
          description: `selecionar a loteria e participar`,
        },   
      ],
    
      featureSvg = [
        {
          icon: "/assets/Icon/features.svg",
        },
      ],

}) => {
  return (
      <>
      {/* road map */}
      <div className='max-w-7xl mx-auto p-4 sm:p-6 lg:p-24 bg-white ' id="roadmap">
        <div className='mb-16 text-center'>
          <h2 className='text-base text-indigo-600 font-semibold tracking-wide '>Road map smart lottery</h2>
          <p className='mt-2 pb-4 text-5xl lg:text-6xl font-bold tracking-tight text-gray-900'>
            Steps to participate
          </p>
        </div>
        <div className='flex flex-wrap -mx-8 items-center'>
          <div className='w-full lg:w-1/2 px-8'>
            <ul className='space-y-12'>
              {roadMap.map((item, index) => (
                <li className='flex -mx-4' key={item.title}>
                  <div className='px-4'>
                    <span
                      className='flex w-16 h-16 mx-auto items-center
                        justify-center text-2xl font-bold rounded-full
                        bg-blue-50 text-blue-500'
                    >
                      {index + 1}
                    </span>
                  </div>
                  <div className='px-4'>
                    <h3 className='my-4 text-xl font-semibold'>{item.title}</h3>
                    <p className='text-gray-500 leading-loose'>{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className='w-full lg:w-1/2 px-8'>
            <div className='lg:mb-12 lg:mb-0 pb-12 lg:pb-0 mt-16 lg:mt-0 mx-6 lg:mx-0'>
              {featureSvg.map((item, index) => (
                <img src={item.icon} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tutorial;
