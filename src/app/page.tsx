'use client'

import Image from "next/image";
import Header from "@/components/HeaderCom";
import UrlModal from "@/components/UrlModal";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [newUrl, setNewUrl] = useState("")
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(title, content);

    try {
      const response = await axios.post("/api/paster", { title, content });
      if (response.data) {
        console.log(response.data.lastPaster);
        setTitle("");
        setContent("");
        setNewUrl(response.data.lastPaster);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.message);
      } else {
        console.log("An unexpected error occurred:", error);
      }
    }
  };
  console.log(newUrl);
  useEffect(() => { }, [newUrl]);

  return (
    <div>
      <header className="border-b border-gray-100 flex justify-between px-8 h-[60px] font-sans">
        <Header />
      </header>
      <main className="container  max-w-7xl mx-auto px-16 ">
        <form onSubmit={handleSubmit}>
          <div className="mt-14">
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className=" border-2 rounded-md outline-0 text-white w-full mb-4 p-4 text-2xl  bg-transparent focus:bg-opacity-45 focus:bg-white transition-all" placeholder="Title" />
            <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Add text..." className=" border-2 rounded-md w-full h-[50vh] p-2 text-white border-blue-100 outline-0 p-4 bg-transparent focus:bg-opacity-45 focus:bg-white transition-all "></textarea>
          </div>
          <div>
            <div className="flex justify-between text-white mt-8 items-end">
              <div className='flex flex-col gap-4'></div>
              <div>
                <button type="submit" className='rounded-md bg-white text-gray-600 hover:bg-white hover:bg-opacity-25 hover:text-white transition-all p-2 px-4 cursor-default'>Create paste</button>
              </div>
            </div>
          </div>
        </form>
      </main >
      {newUrl && <UrlModal newUrl={newUrl} setNewUrl={setNewUrl} />
      }
    </div >
  );
}
