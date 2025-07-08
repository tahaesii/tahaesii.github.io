import { Button } from "@heroui/button";
import React from "react";
import { GoDotFill } from "react-icons/go";
import BigCat from "../../assets/BigCat.svg";
import BigDog from "../../assets/BigDog.svg";
export default function Suggestfood() {
  return (
    <>
      <div className="w-full mt-20">
        <div className=" grid grid-cols-12 my-10 gap-4 xl:gap-20 w-full ">
          <div className="col-span-12  md:col-span-6 overflow-hidden rounded-[20px] ">
            <div className="w-full h-[16rem] bg-[#FEEACB]">
              <div className="flex px-5 ">
                <div className="w-full p-2 xl:p-6 pt-10">
                  <h4 className="neg font-normal text-3xl xl:text-[3rem]  px-3 mb-2">
                    غذای گربه
                  </h4>
                  <ul className="px-3">
                    <li className="flex items-center font-bold text-sm xl:text-[18px] mb-3">
                      <GoDotFill className="text-[#F8B53A]" />
                      غذای خشک
                    </li>
                    <li className="flex items-center font-bold text-sm xl:text-[18px] mb-3">
                      <GoDotFill className="text-[#F8B53A]" />
                      غذای مرطوب
                    </li>
                  </ul>
                  <div className="mt-6 w-1/2 flex justify-center  mr-5 xl:mr-12">
                    <Button className="bg-[#F8B53A] w-[10rem] xl:w-[9rem] h-[2.5rem] text-sm xl:text-[18px] rounded-[20px]">
                      سفارش دهید
                    </Button>
                  </div>
                </div>
                <div className="h-full ">
                  <div className=" pl-2 xl:pl-5 h-full ">
                    <div className="w-[13rem] h-[13rem] bg-[#F8B53A66] mt-7  relative rounded-2xl">
                      <img
                        src={BigCat}
                        className=" w-[19rem]  absolute -top-10 left-2"
                        alt="cat"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 overflow-hidden rounded-[20px]">
            <div className="w-full h-[16rem] bg-[#FEEACB] ">
              <div className="flex xl:px-5 ">
                <div className="w-full p-2 pt-10 xl:p-6">
                  <h4 className="neg font-normal text-3xl xl:text-[3rem]   px-3 mb-2">
                    غذای سگ
                  </h4>
                  <ul className="px-3">
                    <li className="flex items-center font-bold text-sm xl:text-[18px] mb-3">
                      <GoDotFill className="text-[#F8B53A]" />
                      غذای خشک
                    </li>
                    <li className="flex items-center font-bold text-sm xl:text-[18px] mb-3">
                      <GoDotFill className="text-[#F8B53A]" />
                      غذای مرطوب
                    </li>
                  </ul>
                  <div className="mt-6 w-1/2 flex justify-center mr-5 xl:mr-12">
                    <Button className="bg-[#F8B53A] w-[10rem] xl:w-[9rem] h-[2.5rem] text-sm xl:text-[18px] rounded-[20px]">
                      سفارش دهید
                    </Button>
                  </div>
                </div>
                <div className="h-full ">
                  <div className=" pl-2 xl:pl-5 h-full ">
                    <div className="w-[13rem] h-[13rem] bg-[#F8B53A66] mt-7  relative rounded-2xl">
                      <img
                        src={BigDog}
                        className=" w-[19rem]  absolute -top-10 left-2"
                        alt="dog"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
