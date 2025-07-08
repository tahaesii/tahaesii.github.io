import React, { useState } from "react";
import urls from "../../urls";
import mail from "../../assets/mail.svg";
import phoneIcon from "../../assets/phone.svg";
import eye from "../../assets/eye.svg";
import closedEye from "../../assets/closedEye.svg";
import "./login.css";
import { toast, ToastContainer } from "react-toastify";
import { CiWarning } from "react-icons/ci";
import axios from "axios";
export default function SignUp({ setIsLogin }) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    const isEmailInvalid =
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPhoneInvalid = !/^(\\+98|0)?9\d{9}$/.test(phone);
    const isPasswordInvalid = password.length < 8;

    setEmailError(isEmailInvalid);
    setPhoneError(isPhoneInvalid);
    setPasswordError(isPasswordInvalid);

    if (isEmailInvalid || isPhoneInvalid || isPasswordInvalid) {
      toast.error("لطفا اطلاعات را به درستی وارد کنید");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(urls.registerUser, {
        email: email,
        phone_number: "+98" + (phone.startsWith("0") ? phone.slice(1) : phone),
        password: password,
      });

      toast.success("ثبت‌ نام با موفقیت انجام شد");
      setLoading(false);
      console.log("Server response:", response.data);
    } catch (error) {
      setLoading(false);
      console.error("Registration error:", error);
      if (error.response?.data?.detail) {
        toast.error(error.response.data.detail);
      } else {
        toast.error("خطا در ثبت‌نام. لطفاً دوباره تلاش کنید.");
      }
    }
  };

  return (
    <>
      <div className="py-5" data-aos="fade-up">
        <h4 className="text-2xl font-bold text-black">عضویت</h4>
        <div className="py-5">
          <p className="text-base text-[#444444] font-normal">
            قبلا ثبت نام کرده اید؟{" "}
            <span
              className="text-[#F8B53A] cursor-pointer"
              onClick={() => setIsLogin(true)}
            >
              وارد شوید
            </span>
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-y-4" data-aos="fade-up">
        <div className="flex flex-col justify-center items-center gap-y-6">
          <div className="relative w-88">
            <input
              dir="ltr"
              type="text"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              placeholder="شماره موبایل"
              maxLength={11}
              className={`font-light text-sm bg-white text-black w-full p-4 pl-10 border h-[50px] rounded-[10px] duration-200 focus:outline-none ${
                phoneError
                  ? "border-red-500"
                  : "focus:border-[#F8B53A] border-white"
              }`}
            />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <img
                src={phoneIcon}
                alt="icon"
                className="w-5 h-5"
                draggable={false}
              />
            </span>
          </div>
          <div className="relative w-88">
            <input
              dir="ltr"
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="ایمیل"
              className={`font-light text-sm bg-white text-black w-full p-4 pl-10 border h-[50px] rounded-[10px] duration-200 focus:outline-none ${
                emailError
                  ? "border-red-500"
                  : "focus:border-[#F8B53A] border-white"
              }`}
            />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <img
                src={mail}
                alt="icon"
                className="w-5 h-5"
                draggable={false}
              />
            </span>
          </div>
          <div className="relative w-88">
            <input
              dir="ltr"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="رمز عبور"
              className={`font-light text-sm bg-white text-black w-full p-4 pl-10 border h-[50px] rounded-[10px] duration-200 focus:outline-none ${
                passwordError
                  ? "border-red-500"
                  : "focus:border-[#F8B53A] border-white"
              }`}
            />
            <span
              className="absolute left-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              <img
                src={showPassword ? closedEye : eye}
                alt="toggle visibility"
                className="w-5 h-5"
                draggable={false}
              />
            </span>
          </div>
        </div>
        <div className="flex flex-col text-sm mx-auto" >
          <div
            className={`flex items-center gap-x-2 transition-all duration-300 ease-in-out overflow-hidden ${
              password.length >= 8
                ? "opacity-0 max-h-0"
                : "opacity-100 max-h-10"
            }`}
          >
            <span className="flex flex-row items-center gap-x-1 text-[#444444]">
              <CiWarning />
              رمز باید حداقل ۸ کاراکتر باشد
            </span>
          </div>

          <div
            className={`flex items-center gap-x-2 transition-all duration-300 ease-in-out overflow-hidden  ${
              /[a-z]/.test(password) &&
              /[A-Z]/.test(password) &&
              /\d/.test(password)
                ? "opacity-0 max-h-0"
                : "opacity-100 max-h-10"
            }`}
          >
            <span className="flex flex-row items-center gap-x-1 text-[#444444]">
              <CiWarning />
              رمز باید تشکیل شده از حروف کوچک ، بزرگ و اعداد باشد
            </span>
          </div>
        </div>

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="cursor-pointer w-88 h-12 rounded-[10px] bg-[#F8B53A] text-white font-normal text-lg mx-auto"
        >
          {loading ? (
            <span className="loaderLogin"></span>
          ) : (
            "ایجاد حساب کاربری"
          )}
        </button>
      </div>

      <div
        className="flex flex-col justify-center items-center"
        data-aos="fade-up"
      >
        <p className="text-[#444444] pt-4 font-light text-base select-none">
          با عضویت در سایت، تمامی قوانین و شرایط استفاده از{" "}
          <p>
            خدمات <span className="text-[#F8B53A] cursor-pointer">پاوزی</span>{" "}
            را پذیرفته اید.
          </p>
        </p>
      </div>
    </>
  );
}
