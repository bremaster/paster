'use client'

import React from 'react'
import Image from 'next/image'
import Header from '../../components/HeaderCom'
import { useRouter } from 'next/navigation'

const Premium = () => {
    const router = useRouter();
    const logout = () => {
        localStorage.removeItem("token");
        router.push("/auth");
    }
    return (
        <div>
            <header className="border-b border-gray-100 flex justify-between px-8 h-[60px] font-sans">
                <Header />
            </header>
            <div>
                <div className='mt-8 flex flex-col container  max-w-7xl mx-auto px-10'>
                    <div className='h-[150px] mb-14 border-b-2 flex flex-col gap-1 justify-center'>
                        <h1 className='text-[28px]'>Profile</h1>
                        <p className='pb-4 text-[16px]  text-gray-300'>Account id: user_sdfdfsdfsd23423</p>
                    </div>
                    <h2 className='text-[18px] mb-4'>your account</h2>
                    <div className='w-full flex gap-6'>
                        <div className='w-[70%] flex flex-col gap-4'>
                            <div className='w-full rounded-md p-5 flex justify-between items-center border-2 '>
                                <div>
                                    <h3 className='text-[22px]'>Security</h3>
                                    <p className='text-[17px] text-gray-300'>unclescar0813@gmail.com</p>
                                </div>
                                <button className='text-[14px] w-[14%] rounded-md p-2 px-4 transition-all duration-500 border-2 hover:bg-white hover:bg-opacity-35'>manage</button>
                            </div>
                            <div className='w-full rounded-md p-5 flex justify-between items-center border-2 '>
                                <div>
                                    <h3 className='text-[22px]'>Monetization</h3>
                                    <p className='text-[17px] text-gray-300'>Optimize earnings and request cashouts.</p>
                                </div>
                                <button className='text-[14px] w-[14%] rounded-md p-2 px-4 transition-all duration-500 border-2 hover:bg-white hover:bg-opacity-35'>manage</button>
                            </div>
                            <div className='w-full rounded-md p-5 flex justify-between items-center border-2 '>
                                <div>
                                    <h3 className='text-[22px]'>Referral code</h3>
                                    <p className='text-[17px] text-gray-300'>Earn a % of referred users.</p>
                                </div>
                                <button className='text-[14px] w-[14%] rounded-md p-2 px-4 transition-all duration-500 border-2 hover:bg-white hover:bg-opacity-35'>manage</button>
                            </div>
                            <div className='w-full rounded-md p-5 flex justify-between items-center border-2 '>
                                <div>
                                    <h3 className='text-[22px]'>Sign out</h3>
                                    <p className='text-[17px] text-gray-300'>Sign out of your account.</p>
                                </div>
                                <button onClick={logout} className='text-[14px] w-[14%] rounded-md p-2 px-4 transition-all duration-500 border-2 hover:bg-white hover:bg-opacity-35'>Sign out</button>
                            </div>

                        </div>
                        <div className='flex flex-col items-center border-2 p-4 rounded-md w-[30%]'>
                            <div className='flex flex-col items-center justify-center py-10 h-[50%]'>
                                <Image width={30} height={30} alt='logo' src="/Logo.png" className='py-4' />
                                <p className='text-[15px] tracking-[0.5em] mb-[15px] bg-gradient-to-r from-red-800 via-red-600 to-black bg-clip-text text-transparent'>PASTEKING</p>
                                <p className='text-[17px] text-gray-300'>Inactive</p>
                            </div>
                            <div className='border-b border-dotted w-[110%]'></div>
                            <div  className='flex flex-col items-center justify-center py-10 h-[50%] gap-4'>
                                <button className='text-[16px] border p-2 px-4 rounded-md hover:bg-white hover:bg-opacity-30 transition-all duration-500'>View plans &#8594;</button>
                                <p className='text-[17px] text-gray-300'>Redeem code</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Premium
