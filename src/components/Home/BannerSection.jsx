import React from 'react'
import { Image } from '@heroui/image'
import PetBanner from "../../assets/petBanner.svg"
import { Button } from '@heroui/button'
import { FaArrowLeft } from "react-icons/fa6";
export default function BannerSection() {
    return (
        <div className='w-full '>
            <div className='grid grid-cols-12'>
                <div className=' col-span-12 lg:col-span-6 text-center w-full sm:w-[26rem]   rounded-[3px]  mx-auto'>
                    <div className='border-[#F8B53A]'>
                        <div className='border-[#F8B53A]  p-10 lg:p-0 ml-5 lg:ml-0'>
                            <img
                                src={PetBanner}
                            />
                        </div>
                    </div>
                </div>
                <div className='col-span-12 lg:col-span-6 text-center font-normal w-full content-center '>
                    <div className=' text-4xl md:text-7xl xl:text-8xl  mt-15 lg:mt-2 text-center  lg:h-[280px] lg:text-start neg w-full'>
                        هرچیزی که دوست کوچولوت لازم داره <span className='text-[#F8B53A]'>اینجاست !</span>
                    </div>
                    <div className='flex w-full mt-12 gap-6  justify-center lg:justify-start p-4 lg:p-0'>
                        <Button className='flex w-[15rem] bg-[#F8B53A] border rounded-[20px] text-[#F3F3F3] text-xl  border-[#F8B53A] h-[58px]'>همین حالا خرید کنید <FaArrowLeft /></Button>
                        <Button className='flex w-36 h-[58px] rounded-[20px] text-xl text-[#F8B53A] border border-[#F8B53A]'>راهنمایی <FaArrowLeft /></Button>
                    </div>

                </div>

            </div>
        </div>
    )
}
