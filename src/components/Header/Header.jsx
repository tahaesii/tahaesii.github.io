import React from 'react'
import { Image } from "@heroui/image";
import { Link } from 'react-router-dom';
import vector from '../../assets/vector.svg'
import user from '../../assets/user.svg'
import cart from '../../assets/cart.svg'
import wishlist from '../../assets/wishlist.svg'
import { IoIosArrowDown } from "react-icons/io";

export default function Header() {
  return (
    <>
      <div className='w-full' >
        <div className='grid grid-cols-12 h-6 items-center pt-3  '>
          <div className='col-span-6 lg:col-span-3 gap-2  justify-center flex items-center'>
            <img
              alt="pet logo"
              src={vector}
              className='w-[3rem]'
            />
            <h2 className='text-[#F8B53A] font-normal text-[40px] neg'>
              پاوزی
            </h2>
          </div>
          <div className='hidden lg:flex col-span-6'>
            <label className="input w-full h-[3rem] rounded-2xl bg-white shadow-md ">

              <input type="search" required placeholder="جستجو....." className=' text-[#444444] font-normal  ' />
              <svg className="h-[1.5rem] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="black"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
            </label>

          </div>
          <div className='col-span-6 lg:col-span-3 flex  justify-center gap-10 items-center'>
            <div>
              <img
                alt="pet logo"
                src={wishlist}
                className='w-[1.8rem]'
      
        
              />
            </div>
            <Link to={'/login'}>
              <div>
                <img
                  alt="pet logo"
                  src={cart}
                  className='w-[1.8rem]'

                />
              </div></Link>
            <div>
              <img
                alt="pet logo"
                src={user}
                className='w-[1.8rem]'
              />
            </div>
          </div>
          <div className='hidden col-span-5 xl:justify-center lg:flex items-center md:mr-[6rem]  mt-[3rem]'>
            <ul className='flex gap-7 text-center'>
              <li className='w-[71px] h-5 text-[16px] font-normal text-[#444444] flex   items-center gap-1'><span>محصولات </span><span className='text-[#999999]'><IoIosArrowDown /></span></li>
              <li className='w-[71px] h-5 text-[16px] font-normal text-[#F8B53A]'>پرفروش ها</li>
              <li className='w-[71px] h-5 text-[16px] font-normal text-[#444444]'>برندها</li>
              <li className='w-[71px] h-5 text-[16px] font-normal text-[#444444]'>درباره با ما</li>
              <li className='w-[71px] h-5 text-[16px] font-normal text-[#444444]'>تماس با ما</li>
              <li className='w-[71px] h-5 text-[16px] font-normal text-[#444444]'>بلاگ</li>
            </ul>
          </div>
        </div>
      </div></>
  )
}
