import React from "react";
import { FaEthereum } from "react-icons/fa";
import { AiFillApi } from "react-icons/ai";
import { BiCube } from "react-icons/bi";
import { RiAccountPinCircleFill } from "react-icons/ri";

const FeatureCard = ({ color, title, icon, description }) => (
  <div className="flex flex-col items-center justify-center white-glassmorphism p-6 m-4 w-80 max-w-xl rounded-xl cursor-pointer hover:shadow-2xl">
    <div className={`w-16 h-16 rounded-full flex justify-center items-center ${color}`}>
      {icon}
    </div>
    <h3 className="mt-4 text-white text-xl font-bold">{title}</h3>
    <p className="mt-2 text-white text-base text-center">{description}</p>
  </div>
);

const EthereumInfo = () => (
  <div className="flex w-full justify-center items-center gradient-bg-services">
    <div className="flex flex-col items-center justify-center md:p-20 py-12 px-4">
      <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient">
        All About Ethereum
      </h1>
      <p className="text-center my-2 text-white font-light md:w-9/12 w-11/12 text-base">
        Explore the key features and benefits of Ethereum, the world's leading smart contract platform.
      </p>
      <div className="flex flex-wrap justify-center items-center mt-10">
        <FeatureCard
          color="bg-[#2952E3]"
          title="Decentralized Applications"
          icon={<FaEthereum fontSize={28} className="text-white" />}
          description="Ethereum allows developers to build and deploy decentralized applications (DApps) using smart contracts."
        />
        <FeatureCard
          color="bg-[#8945F8]"
          title="Blockchain Technology"
          icon={<BiCube fontSize={28} className="text-white" />}
          description="Ethereum's blockchain is a distributed ledger that records transactions securely and transparently."
        />
        <FeatureCard
          color="bg-[#F84550]"
          title="Smart Contracts"
          icon={<AiFillApi fontSize={28} className="text-white" />}
          description="Smart contracts on Ethereum enable automated, trustless agreements between parties."
        />
        <FeatureCard
          color="bg-[#37c7da]"
          title="Ethereum Accounts"
          icon={<RiAccountPinCircleFill fontSize={28} className="text-white" />}
          description="Users interact with Ethereum through accounts, allowing them to store and transfer Ether and tokens."
        />
      </div>
    </div>
  </div>
);

export default EthereumInfo;
