import React from 'react'
import bestBrands from '../../assets/BestBrands.svg'
import { Button } from '@heroui/button'
import { FaArrowLeft } from "react-icons/fa6";
import bobmartinCompany from '../../assets/bobmartinCompany.svg'
import hollingsCompany from '../../assets/hollingsCompany.svg'
import whimzeesCompany from '../../assets/whimzeesCompany.svg'
import ancolCompany from '../../assets/ancolCompany.svg'



const data = [
    {
        logo:bobmartinCompany
    },
    {
        logo:hollingsCompany
    },
    {
        logo:whimzeesCompany
    },
    {
        logo:ancolCompany
    },
    {
        logo:hollingsCompany
    },
    {
        logo:whimzeesCompany
    },
    {
        logo:ancolCompany
    },
    {
        logo:bobmartinCompany
    },
    {
        logo:hollingsCompany
    },
    {
        logo:whimzeesCompany
    },
     {
        logo:ancolCompany
    },
     {
        logo:bobmartinCompany
    },
]
export default function BestBrands() {
    return (
        <>
            <div className='w-full'>
                <div className='neg  text-[40px] text-start mt-20 mb-6 font-normal'>
                    برند های برتر
                </div>
                <div className='w-full h-[27rem] rounded-[20px] grid grid-cols-11  bg-[#FFFFFF] shadow-md'>
                    <div className='col-span-3 h-full w-full relative  '>
                        <div className=' absolute  text-center w-full top-7 ' >
                            <p className='font-normal text-[17px]  text-[#000000]'>فرصت‌های طلایی تخفیف، فقط برای</p>
                            <p className='text-3xl font-normal mt-2 text-[#000000]' >مدت محدود!</p>
                            <Button className='bg-[#F8B53A]  font-normal text-[#F3F3F3] rounded-[20px] mt-3 w-[11rem] text-[14px] mx-auto h-[35px] flex justify-center items-center'>همین حالا خرید کنید<FaArrowLeft /> </Button>
                        </div>
                        <img src={bestBrands} className=' h-[27rem] w-full rounded-[20px]' alt="banner" />

                    </div>
                    <div className='col-span-8 grid grid-cols-4  justify-center '>
                        {
                            data.map((items,index)=>{
                                return <div className='col-span-1  w-full ' key={index}>
                                    <img src={items.logo} className='h-30 mx-auto' alt="logo" />
                                    <p className='text-center text-[12px] text-[#999999]'>(40 محصول)</p>
                                </div>

                            })


                        }

                    </div>


                </div>

            </div>
        </>
    )
}
