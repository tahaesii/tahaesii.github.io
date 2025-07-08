import React, { useEffect, useState } from "react";
import "./login.css";
import axios from "axios";
import setAuthCookies from "../../setAuthCookies";
import urls from "../../urls";
import { useNavigate } from "react-router-dom";
export default function VerifyPhone({ phoneNumber, onBackToLogin, devOtp }) {
  const [pin, setPin] = useState(["", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const pins = [4, 3, 2, 1, 0];
  const navigate = useNavigate();
  useEffect(() => {
    if (devOtp && devOtp.length === 5) {
      setPin(devOtp.split(""));
    }
  }, [devOtp]);
  const maskPhone = (number) => {
    if (!number || !number.startsWith("+98")) return number;
    return "0" + number.slice(3);
  };
  const handlePinChange = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]?$/.test(value)) {
      let newPin = [...pin];
      newPin[index] = value;
      setPin(newPin);
    }
    if (value.length === 1 && e.target.previousElementSibling) {
      e.target.previousElementSibling.focus();
    }
  };

  const handleBackspace = (e, index) => {
    if (e.key === "Backspace" && pin[index] === "") {
      if (e.target.nextElementSibling) {
        e.target.nextElementSibling.focus();
      }
    }
  };
  const verifyPhone = async () => {
    setLoading(true);
    const otp = pin.join("");
    try {
      const response = await axios.post(urls.verifyPhoneNumber, {
        phone_number: phoneNumber,
        otp: otp,
      });
      setLoading(false);
      console.log("Verification success:", response.data);
      const userData = response.data;
      setAuthCookies(userData);
      navigate("/");
    } catch (error) {
      setLoading(false);
      console.error(
        "Verification failed:",
        error.response?.data || error.message
      );
    }
  };
  return (
    <>
      <div className="py-5 w-full" data-aos="fade-up">
        <h4 className="text-2xl font-bold text-[#000000] select-none pb-2">
          کد تایید
        </h4>
        <div className="py-5">
          <p className="text-base text-[#000000] font-normal select-none">
            کد تایید برای <span dir="ltr">{maskPhone(phoneNumber)}</span> ارسال
            شد
          </p>
        </div>
      </div>

      <div className="flex gap-4 justify-center text-black">
        {pins.map((index) => (
          <input
            id={index}
            key={index}
            type="text"
            maxLength={1}
            onChange={(e) => handlePinChange(e, index)}
            onKeyDown={(e) => handleBackspace(e, index)}
            className="block no-spinner  focus:shadow-lg w-[55px] h-[55px] text-center  rounded-[10px] bg-white  focus:outline-none focus:border-[#F8B53A] border border-white "
            dir="ltr"
            autoFocus={index == 0}
            autoComplete="off"
            data-aos="fade-down"
            onInput={(e) => {
              e.target.value = e.target.value.replace(/[^0-9]/g, "");
            }}
            inputMode="numeric"
          />
        ))}
      </div>
      <button
        data-aos="fade-down"
        className="cursor-pointer w-88 h-12 rounded-[10px] bg-[#F8B53A] text-white font-normal text-lg mt-10"
        color="primary"
        disabled={loading}
        onClick={() => verifyPhone()}
      >
        {loading ? <span className="loaderLogin"></span> : "ورود"}
      </button>
      <div className="flex flex-col justify-center items-center gap-y-5 mt-5">
        <p
          className="text-[#444444] font-light text-sm cursor-pointer select-none"
          data-aos="fade-up"
        >
          ارسال دوباره
        </p>
        <p
          className="text-[#444444] hover:text-[#F8B53A] font-light text-sm cursor-pointer select-none"
          data-aos="fade-up"
          onClick={onBackToLogin}
        >
          بازگشت به صفحه ورود
        </p>
      </div>
    </>
  );
}
