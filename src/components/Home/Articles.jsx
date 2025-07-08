import { Button } from '@heroui/button'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import artdog from '../../assets/artdog.svg'

const data = [
    {
        bg: artdog
    },
    {
        bg: artdog
    },
    {
        bg: artdog
    },
    {
        bg: artdog
    },
]
export default function Articles() {
    return (
        <>
            <div className='w-full my-20 mt-15'>
                <div className='flex justify-between items-center'>
                    <div className='neg font-normal text-5xl'>
                        آخرین مقالات
                    </div>
                    <Button className='font-normal text-[18px] text-[#F3F3F3] bg-[#F8B53A] rounded-[20px] w-[8rem]'>مشاهده</Button>
                </div>
                <div className='w-full my-5 '>
                    <Swiper
                        breakpoints={{
                            300: {
                                slidesPerView: 1,  // نمایش 2 محصول در سایزهای بزرگتر از 576px
                            },
                            500: {
                                slidesPerView: 2,  // نمایش 3 محصول در سایزهای بزرگتر از 1024px (لپ‌تاپ و دسکتاپ‌های کوچک)
                            },
                            // 

                            // دسکتاپ کوچک
                            1024: {
                                slidesPerView: 3,  // نمایش 3 محصول در سایزهای بزرگتر از 1024px (لپ‌تاپ و دسکتاپ‌های کوچک)
                            },
                            // دسکتاپ‌های بزرگ
                            1200: {
                                slidesPerView: 4,  // نمایش 4 محصول در سایزهای بزرگتر از 1200px
                            },

                        }}
                        loop={false}
                        spaceBetween={40}

                        navigation={{
                            prevEl: ".button-prev",
                            nextEl: ".button-next",
                        }}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper   h-[27rem] grid grid-cols-4 "
                    >
                        {
                            data.map((item, index) => {
                                return <SwiperSlide className='col-span-1 rounded-[16px] relative w-full p-2 ' key={index}>
                                    <img src={item.bg} className=' object-center  object-cover rounded-[16px] h-[20rem]  w-full' alt="logo" />
                                    <div className='w-full flex  justify-center' >
                                        <div className='h-[9rem] w-3/4 bg-[#FFFFFF] absolute  drop-shadow-xl/30  rounded-[16px]  bottom-7  text-center grid  grid-flow-col grid-rows-3 pt-4'>
                                            <p className='font-bold text-xl  text-[#000000]'>کدوم خونه ؟</p>
                                            <p className='font-normal text-[14px] text-[#000000]'>پیدا کردن بهترین خانه</p>
                                            <div className='w-full flex justify-between  items-center px-6 pb-4'>
                                                <span className='font-medium text-[#727272] text-[10px] '>15 خرداد 1404</span>
                                                <Button className='text-[#1E1E1E] bg-[#F8B53A] w-[5rem] h-[2rem] rounded-[20px]'>مطالعه</Button>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            })
                        }
                    </Swiper>
                </div>
            </div>
        </>
    )
}