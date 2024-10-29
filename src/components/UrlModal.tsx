'use client'

import Image from "next/image";
import React, { useState } from "react";

const UrlModal = ({newUrl, setNewUrl}) => {
  
    
  return (
    <div className="bg-[#00000063] fixed top-0 left-0 w-[100vw] h-[100vh]">
      <div className="bg-[#ff3c87d0] rounded-lg px-3 fixed relative top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[40%] h-[15%] flex justify-center items-center">
        <input type="text" value={"localhost:3000/" + newUrl} className="outline-none rounded-s-md text-black w-[80%] p-2 text-center"/><button className="rounded-e-md w-[10%] p-2 text-center bg-gray-800">copy</button>
        <span className="absolute top-1 right-4 text-gray-700 text-xl cursor-default" onClick={() => setNewUrl("")}>x</span>
      </div>
    </div>
  );
}

export default UrlModal