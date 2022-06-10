import Link from 'next/link'
import ConnectWallet from '../misc/ConnectWallet'
import { Link as LinkScroll } from "react-scroll";
import { useEffect, useState } from 'react';
import { useWeb3React } from "@web3-react/core";
import logo from '../../../public/assets/Icon/logo_bull.png';
import Image from 'next/image';

export default function Navbar() {

  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);
  
  const {active} = useWeb3React();

  return (
    <header className={
      "fixed top-0 w-full  z-30 bg-white-500 transition-all bg-slate-100" +
      (scrollActive ? " shadow-md pt-0" : " pt-4")
    }
  >
    <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4 ">
      <div className="col-start-1 col-end-2 flex items-center ">
        <div>
        <Image
            src={logo}
            alt="logo"
            width={50}
            height={50}
          />
        </div>
        <p>Smart Lottery</p>
      </div>

        <ul className="hidden lg:flex col-start-4 col-end-8 text-black-500  items-center ">
          {/* about */}
          <LinkScroll
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            duration={1000}
            onSetActive={() => {
              setActiveLink("about");
            }}
            className={
              "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
              (activeLink === "about"
                ? " text-orange-500 animation-active "
                : " text-black-500 hover:text-orange-500 a")
            }
          >
            About
          </LinkScroll>
          {/* Tutorials */}
          <LinkScroll
            activeClass="active"
            to="tutorials"
            spy={true}
            smooth={true}
            duration={1000}
            onSetActive={() => {
              setActiveLink("tutorials");
            }}
            className={
              "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
              (activeLink === "tutorials"
                ? " text-orange-500 animation-active "
                : " text-black-500 hover:text-orange-500 a")
            }
          >
            Tutorials
          </LinkScroll>
          {/* lotteries */}
          {active ? 
          <LinkScroll
            activeClass="active"
            to="lotteries"
            spy={true}
            smooth={true}
            duration={1000}
            onSetActive={() => {
              setActiveLink("lotteries");
            }}
            className={
              "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
              (activeLink === "lotteries"
                ? " text-orange-500 animation-active "
                : " text-black-500 hover:text-orange-500 ")
            }
          >
            Lotteries
          </LinkScroll>
          : ""}
          {/* players */}
          {active ? 
          <LinkScroll
            activeClass="active"
            to="players"
            spy={true}
            smooth={true}
            duration={1000}
            onSetActive={() => {
              setActiveLink("players");
            }}
            className={
              "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
              (activeLink === "players"
                ? " text-orange-500 animation-active "
                : " text-black-500 hover:text-orange-500 ")
            }
          >
            Players
          </LinkScroll>
           : ""}
        </ul>

      {/* button connect wallet */}
      <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
          <ConnectWallet/>
      </div>

      {/* Mobile Navigation */}
      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-t ">
        <div className="bg-white-500 sm:px-3">
          <ul className="flex w-full justify-between items-center text-black-500">
            {/* about */}
            <LinkScroll
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("about");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "about"
                  ? "  border-orange-500 text-orange-500"
                  : " border-transparent")
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              About
            </LinkScroll>
            {/* tutorials */}
            <LinkScroll
              activeClass="active"
              to="tutorials"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("tutorials");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "tutorials"
                  ? "  border-orange-500 text-orange-500"
                  : " border-transparent")
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              tutorials
            </LinkScroll>
            {/* lotteries */}
            <LinkScroll
              activeClass="active"
              to="lotteries"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("lotteries");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "lotteries"
                  ? "  border-orange-500 text-orange-500"
                  : " border-transparent ")
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
              Lotteries
            </LinkScroll>
            {/* players */}
            <LinkScroll
              activeClass="active"
              to="players"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("players");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "players"
                  ? "  border-orange-500 text-orange-500"
                  : " border-transparent ")
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Players
            </LinkScroll>
          </ul>
        </div>
      </nav>
      {/* End Mobile Navigation */}

    </nav>
    </header>
  )
}
