import React, {useEffect, useState} from "react";
import validation from "../helpers/validation";

import BottomState from '../components/BottomState'
import Connections from '../components/Connections'
import Dock from '../components/Dock'
import LeftPane from '../components/LeftPane'
import RigntPane from '../components/RightPane'
import Stat from '../components/Stat'
import TopState from '../components/TopStats'



const Dashboard = () => {
  return (
    <div className="w-full min-h-screen px-12 pt-10 font-sans bg-cover border-blue-900 border-b-16"
         style={{ backgroundImage: "url('/img/background.png')" }}>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/30 to-transparent"></div>

      <h1 className="relative text-2xl text-white font-semibold text-center uppercase">
        Vehicle overview
      </h1>

      <div className="flex items-start mt-4">

        {/* LeftPane */}
        <div className="w-1/4">
          {/* Content of LeftPane goes here */}
        </div>

        <div className="flex w-full flex-col px-16 pt-6 relative">

          {/* TopStats */}
          <div className="mb-6">
            {/* Content of TopStats goes here */}
          </div>

          {/* BottomStats */}
          <div className="mb-6">
            {/* Content of BottomStats goes here */}
          </div>

          {/* Connections */}
          <div className="mb-6">
            {/* Content of Connections goes here */}
          </div>

          <div className="absolute flex flex-col justify-center -translate-x-1/2 left-1/2 top-52">
            <img className="w-[380px] h-auto" src="/img/Space-X-Dragon.png" alt="" />
          </div>

          <div className="relative flex self-center pt-24">
            <span className="text-white uppercase text-xxxs">Cabin Mics :</span>
            <span className="uppercase text-red text-xs">Recording</span>
          </div>
        </div>

        {/* RightPane */}
        <div className="w-1/4">
          {/* Content of RightPane goes here */}
        </div>

      </div>

      <div className="flex justify-between">

        <div className="flex items-center w-80">
          <button className="relative z-10 px-8 py-6 text-sm font-bold uppercase bg-white rounded">
            System
          </button>
          <button className="relative -translate-x-1 px-8 py-4 border rounded text-white text-sm font-bold border-gray-600/50 bg-opacity-[0.1] uppercase">
            Cabin
          </button>
        </div>

        {/* Dock */}
        <div>
          {/* Content of Dock goes here */}
        </div>

        <div className="flex items-center justify-end space-x-5 w-80">
          <span className="tracking-wider text-gray-600 text-xxs whitespace-nowrap">
            Power, Engine, Comms
          </span>
          <button className="px-8 py-4 border rounded text-white text-sm font-bold border-gray-600/50 bg-gray-900 bg-opacity-[0.1] uppercase">
            More
          </button>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
