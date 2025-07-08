import React from 'react'
import dogLogo from '../../assets/beautiful-pet-portrait-dog.svg'
import catLogo from '../../assets/adorable-british-shorthair-kitty-with-monochrome-wall-her.svg'
import rabbitLogo from '../../assets/portrait_cute_fluffy_gray_rabbit_with_ears_natural_green_grass.svg'
import birdLogo from '../../assets/yellow-parrot-corella-light_73990-344.svg'
import hamsterLogo from '../../assets/closeup-shot-guinea-pig-isolated-white-background.svg'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const category = [

    {
        title: "سگ",
        img: dogLogo,
    },
    {
        title: "گربه",
        img: catLogo,
    },
    {
        title: "خرگوش",
        img: rabbitLogo,
    },
    {
        title: "پرنده",
        img: birdLogo,
    },
    {
        title: "همستر",
        img: hamsterLogo,
    },
]


export default function Category() {
    return (
        <>
            <div className='w-full bg-[#FEEACB] p-6 pb-10 xl:px-10 mt-10 relative rounded-3xl  '>
                <div className='text-center neg mt-2 text-5xl font-normal'>
                    دسته بندی ها
                </div>

                <Swiper
                    breakpoints={{
                        300: {
                            slidesPerView: 2,  // نمایش 2 محصول در سایزهای بزرگتر از 576px
                        },

                        // دسکتاپ کوچک
                        600: {
                            slidesPerView: 3,  // نمایش 3 محصول در سایزهای بزرگتر از 1024px (لپ‌تاپ و دسکتاپ‌های کوچک)
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
                    spaceBetween={30}

                    navigation={{
                        prevEl: ".button-prev",
                        nextEl: ".button-next",
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper   w-full mt-8  lg:gap-17 grid grid-cols-4 lg:grid-cols-5"
                >
                    {
                        category.map((item, index) => {
                            return <SwiperSlide className="card bg-base-100 shadow-sm col-span-2 lg:col-span-1  cursor-pointer "
                                key={index} >
                                <figure className='p-2'>
                                    <img
                                        src={item.img}
                                        alt="petLogo"
                                        className=' bg-cover h-30 w-full rounded-[5px]'
                                    />
                                </figure>
                                <div className="body p-2">
                                    <h2 className="text-center text-[18px] font-normal text-[#000000]">{item.title}</h2>
                                </div>
                            </SwiperSlide>
                        })
                    }
                </Swiper>

            </div>
        </>
    )
}
