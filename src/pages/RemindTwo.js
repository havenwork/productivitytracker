import React from "react";
import { MdDelete } from "react-icons/md";
function RemindTwo() {
  return (
    <div className="h-full">

      <div
        className="h-[5em] rounded-xl w-[90%] my-4 mx-auto flex flex-col justify-evenly px-[1em]"
        style={{ background: "#96dcff17" }}
      >
        <p className="text-xl">Your Task for today !!</p>
        <span className="text-sm">1 of 3 completed</span>
      </div>

      <>
        <div className="">
          <h3 className="text-center font-bold text-xl tracking-wide">TODAY</h3>
          
          <div className="flex items-center justify-between w-[90%] p-[1em] my-5 mx-auto rounded-md" style={{background : "#96dcff2c"}}>
            <p className="w-[90%]">Burn 1560 cal🔥</p>
            <MdDelete className="text-xl text-red-500" />
          </div>

          <div className="flex items-center justify-between w-[90%] p-[1em] my-5 mx-auto rounded-md" style={{background : "#96dcff2c"}}>
            <p className="w-[90%]">Burn 1560 cal🔥</p>
            <MdDelete className="text-xl text-red-500" />
          </div>
          
          <div className="flex items-center justify-between w-[90%] p-[1em] my-5 mx-auto rounded-md" style={{background : "#96dcff2c"}}>
            <p className="w-[90%]">Burn 1560 cal🔥</p>
            <MdDelete className="text-xl text-red-500" />
          </div>

        </div>

        <div className="">
          <h3 className="text-center font-bold text-xl tracking-wide">TOMORROW</h3>
          
          <div className="flex items-center justify-between w-[90%] p-[1em] my-5 mx-auto rounded-md" style={{background : "#96dcff2c"}}>
            <p className="w-[90%]">Burn 1560 cal🔥</p>
            <MdDelete className="text-xl text-red-500" />
          </div>

          <div className="flex items-center justify-between w-[90%] p-[1em] my-5 mx-auto rounded-md" style={{background : "#96dcff2c"}}>
            <p className="w-[90%]">Burn 1560 cal🔥</p>
            <MdDelete className="text-xl text-red-500" />
          </div>

          <div className="flex items-center justify-between w-[90%] p-[1em] my-5 mx-auto rounded-md" style={{background : "#96dcff2c"}}>
            <p className="w-[90%]">Burn 1560 cal🔥</p>
            <MdDelete className="text-xl text-red-500" />
          </div>

        </div>

        <div className="">
          <h3 className="text-center font-bold text-xl tracking-wide">22/03/2024</h3>
          
          <div className="flex items-center justify-between w-[90%] p-[1em] my-5 mx-auto rounded-md" style={{background : "#96dcff2c"}}>
            <p className="w-[90%]">Burn 1560 cal🔥</p>
            <MdDelete className="text-xl text-red-500" />
          </div>

          <div className="flex items-center justify-between w-[90%] p-[1em] my-5 mx-auto rounded-md" style={{background : "#96dcff2c"}}>
            <p className="w-[90%]">Burn 1560 cal🔥</p>
            <MdDelete className="text-xl text-red-500" />
          </div>

          <div className="flex items-center justify-between w-[90%] p-[1em] my-5 mx-auto rounded-md" style={{background : "#96dcff2c"}}>
            <p className="w-[90%]">Burn 1560 cal🔥</p>
            <MdDelete className="text-xl text-red-500" />
          </div>

        </div>


        <div className="pb-2">
          <h3 className="text-center font-bold text-xl tracking-wide">23/03/2024</h3>
          
          <div className="flex items-center justify-between w-[90%] p-[1em] my-5 mx-auto rounded-md" style={{background : "#96dcff2c"}}>
            <p className="w-[90%]">Burn 1560 cal🔥</p>
            <MdDelete className="text-xl text-red-500" />
          </div>

          <div className="flex items-center justify-between w-[90%] p-[1em] my-5 mx-auto rounded-md" style={{background : "#96dcff2c"}}>
            <p className="w-[90%]">Burn 1560 cal🔥</p>
            <MdDelete className="text-xl text-red-500" />
          </div>

          <div className="flex items-center justify-between w-[90%] p-[1em] my-5 mx-auto rounded-md" style={{background : "#96dcff2c"}}>
            <p className="w-[90%]">Burn 1560 cal🔥</p>
            <MdDelete className="text-xl text-red-500" />
          </div>

        </div>

      </>
    </div>
  );
}

export default RemindTwo;
