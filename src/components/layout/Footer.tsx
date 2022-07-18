import Image from "next/image";
import logo from '../../../public/assets/Icon/logo_bull.png';
import github from '../../../public/assets/Icon/github.svg';

  export default function Footer() {
    return (
      <div className="bg-slate-100 pt-10 pb-10">
        <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
          <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">

            <div className="col-start-1 col-end-2 flex items-center ">
              <Image src={logo} alt="logo" width={50} height={50}/>
              <p>Smart Lottery</p>
            </div>

            <p className="mb-4">
               A simplified lottery on the <strong>blockchain!!</strong>
            </p>
            <div className="flex w-full mt-2 mb-8 -mx-2">

              <a href="https://github.com/MatheusMartini" target="_blank">
                <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
                  <Image src={github} alt="logo" width={32} height={32}/>
                </div>
              </a>

              <div className=" items-center justify-center flex p-2 ">
                <p className="text-gray-400">©2022Martini</p>
              </div>
            </div>
            
          </div>
          <div className=" row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
            <p className="text-black-600 mb-4 font-medium text-lg">Codes</p>
            <ul className="text-black-500 ">
              <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                <a href="https://github.com/MatheusMartini/smart_lottery" target="_blank">
                  Smart Lottery
                </a>
              </li>
              <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                <a href="https://github.com/MatheusMartini/smart_contract_lottery" target="_blank">
                  Smart Contract
                </a>
              </li>
            </ul>
          </div>
          <div className="row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col">
            <p className="text-black-600 mb-4 font-medium text-lg">Bsc Scan</p>
            <ul className="text-black-500">            
              <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                <a href="https://testnet.bscscan.com/address/0x8500367cdd0730BE8A2A305239A2cBB40b4b8549" target="_blank">
                  Contract Lottery 1
                </a>
              </li>
              <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                <a href="https://testnet.bscscan.com/address/0x5d6dB8D5c7fE61b53Ed02Dc0dEE5a66f751dc5A5" target="_blank">
                  Contract Lottery 2
                </a>
              </li>
              <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                <a href="https://testnet.bscscan.com/address/0x5B76090a3637f343A7c30719f642a3f37e49c586" target="_blank">
                  Contract Lottery 3
                </a>
              </li>
              {/* <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                About Us{" "}
              </li>
              <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                Privacy Policy{" "}
              </li>
              <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                Terms of Service{" "}
              </li> */}
            </ul>
          </div>
          <div className="row-span-2 sm:col-span-2 sm:col-start-11 sm:col-end-13 flex flex-col">
            <p className="text-black-600 mb-4 font-medium text-lg">Donations</p>
            <ul className="text-black-500">
              <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              <a href="https://www.buymeacoffee.com/MartiniMatheus" target="_blank">
                  Buy me a coffee :)
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
  