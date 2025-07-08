import React, { useState } from "react";
import vector from "../../assets/vector.svg";
import Login from "./Login";
import SignUp from "./SignUp";
import VerifyPhone from "./VerifyPhone";

export default function LoginAndSignUpForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [verifyPhonePage, setVerifyPhonePage] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState();
  const [isEmailLogin, setIsEmailLogin] = useState(false);
  const [devOtp, setDevOtp] = useState(null);
  const handleBackToLogin = () => {
    setVerifyPhonePage(false);
    setIsEmailLogin(false);
  };
  return (
    <div className="max-w-full max-h-full flex justify-center items-center h-[100vh]">
      <div className="flex flex-col gap-y-2">
        <div className="hidden  col-span-3 gap-x-2 justify-center md:flex items-center">
          <img alt="pet logo" src={vector} width={50} />
          <h2 className="text-[#F8B53A] font-normal text-[40px] neg">پاوزی</h2>
        </div>
        <div className="bg-[#FEF1DD] rounded-[20px] shadow-md text-center p-4 md:p-8 h-screen w-screen md:w-full md:h-full  content-center ">
          <div className="flex  col-span-3 gap-x-2 justify-center md:hidden items-center">
            <img alt="pet logo" src={vector} width={50} />
            <h2 className="text-[#F8B53A] font-normal text-[40px] neg">پاوزی</h2>
          </div>
          {isLogin ? (
            verifyPhonePage ? (
              <VerifyPhone
                phoneNumber={phoneNumber}
                onBackToLogin={handleBackToLogin}
                devOtp={devOtp}
              />
            ) : (
              <Login
                setIsLogin={setIsLogin}
                setVerifyPhonePage={setVerifyPhonePage}
                setPhoneNumber={setPhoneNumber}
                isEmailLogin={isEmailLogin}
                setIsEmailLogin={setIsEmailLogin}
                setDevOtp={setDevOtp}
              />
            )
          ) : (
            <SignUp setIsLogin={setIsLogin} />
          )}
        </div>
      </div>
    </div>
  );
}
