
  export default function Footer() {
    return (
      <div className="bg-gray-200 pt-10 pb-10">
        <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
          <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          <p>logo </p>
            <p className="mb-4">
              <strong className="font-medium">Smartlottery</strong> definição da loteria colocar aqui
            </p>
            <div className="flex w-full mt-2 mb-8 -mx-2">
              <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <p>rede social aqui</p>
              </div>
              <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <p>rede </p>
              </div>
              <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
                <p>rede </p>
              </div>
            </div>
            <p className="text-gray-400">©2022Martini</p>
          </div>
          <div className=" row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
            <p className="text-black-600 mb-4 font-medium text-lg">Product</p>
            <ul className="text-black-500 ">
              <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                Download{" "}
              </li>
              <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                Pricing{" "}
              </li>
            </ul>
          </div>
          <div className="row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col">
            <p className="text-black-600 mb-4 font-medium text-lg">Engage</p>
            <ul className="text-black-500">            
              <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                Tutorials{" "}
              </li>
              <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                About Us{" "}
              </li>
              <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                Privacy Policy{" "}
              </li>
              <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                Terms of Service{" "}
              </li>
            </ul>
          </div>
          <div className="row-span-2 sm:col-span-2 sm:col-start-11 sm:col-end-13 flex flex-col">
            <p className="text-black-600 mb-4 font-medium text-lg">Earn Money</p>
            <ul className="text-black-500">
              <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                Affiliate{" "}
              </li>
              <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                Become Partner{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
  