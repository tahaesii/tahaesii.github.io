import React from 'react'
import gourmet from '../../assets/gourmet.svg'
import bobmartinCompany from '../../assets/bobmartinCompany.svg'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
const data = [
    {
        title: "پوچ گربه ویسکاس مرغ در ژله",
        price: "1.500.000 ",
        img: gourmet,
        copmanyImg: bobmartinCompany,
    },
    {
        title: "پوچ گربه فلیسیا مرغ",
        price: "1.500.000 ",
        img: gourmet,
        copmanyImg: bobmartinCompany,
    },
    {
        title: "غذای سگ یورکشایر بالغ رفلکس پلاس (2 کیلوگرم)",
        price: "850.000 ",
        img: gourmet,
        copmanyImg: bobmartinCompany,
        discount: {
            discountStatus: true,
            priceBeforDiscount: "1.500.000"
        }
    },
    {
        title: "کنسرو گربه گورمه گلد پته بیف",
        price: "1.500.000 ",
        img: gourmet,
        copmanyImg: bobmartinCompany,
    },
    {
        title: "کنسرو گربه گورمه گلد پته بیف",
        price: "1.500.000 ",
        img: gourmet,
        copmanyImg: bobmartinCompany,
    },

]

export default function BestSellingProducts() {
    return (
        <>
            <div className='w-full '>
                <div className='p-2 mt-10'>
                    <div className='neg text-5xl'>
                        محصولات پرفروش
                    </div>
                    <div className='w-full mt-10' >
                        <Swiper
                            breakpoints={{
                                300: {
                                    slidesPerView: 1,  // نمایش 2 محصول در سایزهای بزرگتر از 576px
                                },

                                // دسکتاپ کوچک
                                1024: {
                                    slidesPerView: 2,  // نمایش 3 محصول در سایزهای بزرگتر از 1024px (لپ‌تاپ و دسکتاپ‌های کوچک)
                                },
                                // دسکتاپ‌های بزرگ
                                1200: {
                                    slidesPerView: 4,  // نمایش 4 محصول در سایزهای بزرگتر از 1200px
                                },
                                1400: {
                                    slidesPerView: 5,  // نمایش 5 محصول در سایزهای بزرگتر از 1400px
                                },
                            }}
                            loop={false}
                            spaceBetween={40}

                            navigation={{
                                prevEl: ".button-prev",
                                nextEl: ".button-next",
                            }}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="mySwiper   h-[25rem]"
                        >
                            {
                                data.map((item, index) => {
                                    return <SwiperSlide className="bg-[#FFFFFF] card  border rounded-2xl border-[#444444] hover:border-[#F8B53A] text-[#434242] hover:text-[#F8B53A]  duration-200 shadow-sm cursor-pointer">
                                        <div className='card-head flex w-full h-4 p-2 '>
                                            <span className=' m-2'><IoMdHeartEmpty size={25} /></span>
                                            <span className='w-full'>
                                                <img src={item.copmanyImg} alt="company" className='w-24 mr-8 h-10' />
                                            </span>

                                        </div>
                                        <figure className="px-10 pt-10">
                                            <img
                                                src={item.img}
                                                alt="logo"
                                                className="rounded-xl h-[13rem]" />
                                        </figure>
                                        <div className="card-body items-center text-center">
                                            <p className=' font-normal text-[16px] text-center lg:w-64 h-7 ' >{item.title}</p>

                                        </div>
                                        <div className="card-actions flex  font-black text-[15px] justify-between items-center px-5 lg:px-5 mt-3">
                                            <span><FaPlus /></span>
                                            {
                                                item.discount?.discountStatus ? <div className='flex gap-3'>
                                                    <p className='text-[#746C6C] text-[12px] relative z-10'>{item.discount.priceBeforDiscount} ت <span className='absolute  w-[5rem] h-[1px]  rounded-full bg-[#746C6C]  top-2  -left-1'></span></p>
                                                    <p>{item.price} ت</p>
                                                </div>
                                                    : <div>{item.price} ت</div>
                                            }
                                        </div>
                                    </SwiperSlide>


                                })
                            }
                        </Swiper>

                    </div>

                </div>

            </div>

        </>
    )
}
