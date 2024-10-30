'use client'

import React, { useEffect, useState } from 'react'
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import axios from 'axios';

const HeaderCom = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  useEffect(() => {
    const token = localStorage.getItem('token');
    const verifyToken = async (token: string | null) => {
      if (!token) {
        console.log("No token found, redirecting to /auth");
        // router.push('/auth');
        return;
      }

      try {
        const response = await axios.post('/api/protected', { token });
        if (response.data.valid) {
          setEmail(response.data.user.email);
        }
      } catch (error) {
        console.error("Verification failed:", error);
      }
    };

    verifyToken(token);
  }, [router]);

  const logout = () => {
    localStorage.removeItem("token");
    router.push("/auth");
  }

  return (
    <div className='w-full flex justify-between items-center'>
      <div className="flex items-center text-white ">
        <Link href="/">
          <Image width={23} height={22.5} alt='standard' src="/Logo.png" className="mx-2" /></Link>
        {email ? <Link href={"/profile"} className='cursor-pointer'> {email} </Link> : <Link href="/auth" className="flex items-center hover:bg-white hover:bg-opacity-20 rounded-md p-1">
          Sign in
          <Image width={12} height={12} alt='updownarrow' src="/updownarrow.svg" className='ml-1' />
        </Link>}
      </div>
      <h2 className='text-[24px] font-[fantasy] tracking-wider'>PasteKing</h2>
      <div className="flex items-center gap-3">
        <Link href="/premium" className="flex items-center text-white border rounded-md px-2 cursor-pointer hover:bg-white hover:bg-opacity-35 transition-all">
          <span className='ml-1'>Buy Premium</span>
        </Link>
        <a className="rounded-full border py-1 px-2 text-sm">Support</a>
      </div>
    </div>
  )
}

export default HeaderCom