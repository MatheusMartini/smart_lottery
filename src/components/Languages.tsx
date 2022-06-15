import React from "react";
import Image from "next/image";

const Languages = ({
  listComponents = [
    {
      name: "Locations",
      title: "Brasil, Sc",
      icon: "/assets/Icon/gridicons_location.svg",
    },
    {
      name: "Lotteries",
      title: "3",
      icon: "/assets/Icon/bx_bxs-server.svg",
    },
    {
      name: "Players",
      title: "Loading...",
      icon: "/assets/Icon/heroicons_sm-user.svg",
    },
  ],

  listLanguages = [
    {
      icon:"/languages/solidity.svg"
    },
    {
      icon:"/languages/metamask.svg"
    },
    {
      icon:"/languages/binance-logo.svg"
    },
    {
      icon:"/languages/nextjs-2.svg"
    },
    {
      icon:"/languages/tailwind-css-1.svg"
    },
    {
      icon:"/languages/microsoft-azure-2.svg"
    },
    {
      icon:"/languages/logo-javascript.svg"
    },
    {
      icon:"/languages/typescript.svg"
    },

  ]

}) => {
  return (
    <div className="max-w-screen-xl mt-10 px-8 xl:px-16 mx-auto py-10 " id="about">
      <div className='flex justify-center w-full'>
        <div className='mt-4 w-full'>
          <p className='font-mono uppercase text-center font-medium text-sm text-gray-600'>Languages used for application development</p>
          <div className='flex items-center justify-center mx-auto flex-wrap'>
            {/* <Aws className='m-12 mb-8' width={120} /> */}
            {listLanguages.map((listLanguages, index) => (
              <img src={listLanguages.icon} className="h-24 w-24 p-1"/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Languages;
