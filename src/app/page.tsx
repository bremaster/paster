'use client'

import Image from "next/image";
import Header from "@/components/HeaderCom";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  // const [message, setMessage] = useState({
  //   title: "",
  //   content: "",
  //   token: ""
  // })
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const token = localStorage.getItem("token");
  //   console.log(title, content, token);

  //   try {
  //     const response = await axios.post("/api/message", { title, content, token }); // Include title and content
  //     if (response.data.success) {
  //       console.log("Success:", response.data);
  //     }
  //   } catch (error) {
  //     console.error('Failed:', error.response); // Log the error detail
  //   }
  // };
  return (
    <div>
      <header className="border-b border-gray-100 flex justify-between px-8 h-[60px] font-sans">
        <Header />
      </header>
      <main className="container  max-w-7xl mx-auto px-16 ">
        <div className="mt-14">
          <form >
            <input type="text" className=" border-2 rounded-md outline-0 text-white w-full mb-4 p-4 text-2xl  bg-transparent focus:bg-opacity-45 focus:bg-white transition-all" placeholder="Title" />
            <textarea  placeholder="Add text..." className=" border-2 rounded-md w-full h-[50vh] p-2 text-white border-blue-100 outline-0 p-4 bg-transparent focus:bg-opacity-45 focus:bg-white transition-all "></textarea>
          </form>
        </div>
        <div>
          <div className="flex justify-between text-white mt-8 items-end">
            <div className='flex flex-col gap-4'></div>
            <div>
              <button type="submit" className='rounded-md bg-white text-gray-600 hover:bg-white hover:bg-opacity-25 hover:text-white transition-all p-2 px-4 cursor-default'>Create paste</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
