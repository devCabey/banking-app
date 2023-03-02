import React from "react";

import HomeCard from "../components/HomeCard";
import FinancialCard from "../components/FinancialCard";
import ServiceCard from "../components/ServiceCard";

function Home() {
  return (
    <div className=" w-full">
      <div className="relative">
        <div className="w-full sm:h-[500px] mt-5 md:mt-0">
          <img
            src="https://www17.wellsfargomedia.com/assets/images/contextual/responsive/hpprimary/adobestock_177573783_hl_hppb_1700x700.jpg"
            alt=""
            className="w-full h-full"
          />
        </div>

        <div className="flex flex-row absolute md:left-10 md:top-10 ">
          <div className="bg-white rounded-lg w-80 h-[350px] shadow-md shadow-gray-400 p-5 hidden md:block">
            <div>
              <h3 className="text-2xl ">Good morning</h3>
              <h6 className="text-gray-400 text-sm font-light">
                Sign on to manage your accounts.
              </h6>
            </div>
            <div>
              <div className="hover:border hover:border-red-700 hover:border-b-2 h-12 flex flex-col  px-4 rounded-md hover:shadow-sm shadow-red-600 mt-5 border-b border-gray-500">
                <span className="text-xs text-gray-500">Username</span>
                <input
                  type="text"
                  placeholder="example@mail.com"
                  className="bg-transparent flex-1 outline-none text-gray-700 "
                />
              </div>
              <div className="hover:border hover:border-red-700 hover:border-b-2 h-12 flex flex-col  px-4 rounded-md hover:shadow-sm shadow-red-600 mt-5 border-b border-gray-500">
                <span className="text-xs text-gray-500 ">Password</span>
                <input
                  type="password"
                  placeholder="**********"
                  className="bg-transparent flex-1 outline-none text-gray-700 "
                />
              </div>
            </div>
            <div className="my-5 flex flex-row justify-between ">
              <span className="cursor-pointer px-4 py-2 border-b rounded-full text-sm border-red-800 hover:bg-red-800 hover:text-white font-light">
                Sign on
              </span>
              <span className="cursor-pointer px-4 py-2 border-b rounded-full text-sm border-red-800 hover:bg-red-800 hover:text-white font-light">
                Enroll now
              </span>
            </div>
          </div>
          <div className="ml-10 h-[350px] md:flex flex-col justify-center hidden">
            <h1 className="text-6xl font-light">
              $0 has never felt like so <br className="hidden" /> much
            </h1>
            <h6 className="my-5 text-xl xl:text-2xl ">
              $0 online trades with Bank Mega
            </h6>
            <span className="w-56 border border-gray-700 text-center py-2 rounded-full text-lg hover:bg-black hover:text-white cursor-pointer">
              Take Control
            </span>
          </div>
        </div>
      </div>

      <div className="my-5 flex md:hidden flex-col justify-center items-center">
        <h1 className="text-2xl text-center">$0 has never felt like so much</h1>
        <h6 className="my-5 text-sm font-light text-center">
          $0 online trades with Bank Mega
        </h6>
        <div className="m-auto border border-gray-700 text-center py-2 px-3 rounded-full text-xs hover:bg-black hover:text-white cursor-pointer">
          Take Control
        </div>
      </div>

      {/* middle square divs */}
      <div className="flex md:flex-row w-full md:justify-between px-5 flex-col items-center">
        <HomeCard
          topic="Buying a house? Funds not enough? We can help."
          image="https://cdn.pixabay.com/photo/2017/09/12/06/26/home-2741413_1280.png"
          link="/"
        />
        <HomeCard
          topic="Make online payment with pride."
          image="https://cdn.iconscout.com/icon/free/png-256/credit-card-2650080-2196542.png"
          link="/"
        />
        <HomeCard
          topic="Find a credit card with good score."
          image="https://cdn3d.iconscout.com/3d/premium/thumb/credit-card-5706064-4755619.png"
          link="/"
        />
        {/* <HomeCard
          topic="Interest rate today"
          image="https://www.svgrepo.com/download/205823/percentage-percent.svg"
          link="/"
        /> */}
      </div>

      {/* first content  */}
      <div className="flex flex-col items-center my-10">
        <span className="border border-red-800 w-24 mb-10"></span>
        <h1 className="text-2xl md:text-4xl font-thin mb-16 text-center">
          Financial guidance and support
        </h1>
        <div className="w-full flex lg:flex-row md:justify-between lg:px-5 flex-col justify-center items-center">
          <FinancialCard />
          <FinancialCard />
          <FinancialCard />
        </div>
      </div>

      {/* Second Content */}

      <div className="flex flex-col items-center my-10">
        <span className="border border-red-800 w-24 mb-10"></span>
        <h1 className="text-2xl md:text-4xl font-thin mb-10 text-center">
          Serving our customers and communities
        </h1>
        <p className="mb-16 text-gray-800 md:text-lg text-xs text-center font-light md:font-normal">
          It doesn't happen with one transaction, in one day on the job, or in
          one quarter. It's earned relationship by relationship.
        </p>
        <div className="w-full flex md:flex-row md:justify-between px-5 flex-col justify-center">
          <ServiceCard />
          <ServiceCard />
        </div>
      </div>
    </div>
  );
}

export default Home;
