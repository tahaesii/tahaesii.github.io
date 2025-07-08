import React, { useRef, useState, useEffect } from "react";
import setAuthCookies from "../../setAuthCookies";
import axios from "axios";
import mail from "../../assets/mail.svg";
import phone from "../../assets/phone.svg";
import eye from "../../assets/eye.svg";
import closedEye from "../../assets/closedEye.svg";
import "./login.css";
import { toast, ToastContainer } from "react-toastify";
import urls from "../../urls";
import { useNavigate } from "react-router-dom";
export default function Login({
  setIsLogin,
  setVerifyPhonePage,
  setPhoneNumber,
  isEmailLogin,
  setIsEmailLogin,
  setDevOtp   
}) {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const phoneRef = useRef();
  const emailRef = useRef();
  const navigate = useNavigate();
  useEffect(() => {
    if (phoneRef.current) phoneRef.current.value = "";
    if (emailRef.current) emailRef.current.value = "";
  }, [isEmailLogin]);
  const handleEmailLogin = async () => {
    const value = emailRef.current.value;
    var regex = new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
    setLoading(true);
    if (!regex.test(value)) {
      toast.error("ایمیل را به صورت صحیح وارد کنید");
      setLoading(false);
      return;
    }

    if (password.length < 8 || password.length > 16) {
      toast.error("رمز عبور باید بین ۸ تا ۱۶ کاراکتر باشد");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(urls.loginWithEmail, {
        email: value,
        password: password,
      });
      setLoading(false);
      toast.success("ورود موفقیت‌آمیز بود");
      console.log("Login success:", response.data);
      const userData = response.data;
      setAuthCookies(userData);
      navigate("/");
    } catch (error) {
      setLoading(false);
      console.error("Login error:", error);
      toast.error(
        error.response?.data?.detail || "ورود ناموفق. لطفاً دوباره تلاش کنید."
      );
    }
  };

  const handlePhoneLogin = async () => {
    const value = phoneRef.current.value;
    var regex = new RegExp("^(\\+98|0)?9\\d{9}$");
    setLoading(true);
    if (!regex.test(value)) {
      toast.error("شماره تلفن را به صورت صحیح وارد کنید");
      setLoading(false);
      return;
    }

    const formattedPhone =
      "+98" + (value.startsWith("0") ? value.slice(1) : value);

    try {
      const response = await axios.post(urls.loginWithPhoneNumber, {
        phone_number: formattedPhone,
      });
      setLoading(false);
      toast.success("کد تایید ارسال شد");
      setPhoneNumber(formattedPhone);
      setVerifyPhonePage(true);
      if (response.data?.otp) {
        console.log("Received OTP for dev:", response.data.otp);
        setDevOtp(response.data.otp);
      }
      console.log(response.data);
    } catch (error) {
      console.error("OTP send error:", error);
      toast.error(error.response?.data?.detail || "ارسال کد با خطا مواجه شد");
      setLoading(false);
    }
  };
  return (
    <>
      <div className="py-5" data-aos="fade-up">
        <h4 className="text-2xl font-bold text-black select-none">
          {isEmailLogin ? "ورود با ایمیل" : "ورود با شماره موبایل"}
        </h4>
        <div className="py-5">
          <p className="text-base text-[#444444] font-normal select-none">
            حساب کاربری ندارید؟{" "}
            <span
              className="text-[#F8B53A] cursor-pointer"
              onClick={() => setIsLogin(false)}
            >
              ثبت نام کنید
            </span>
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-y-9" data-aos="fade-up">
        <div className="flex flex-col justify-center items-center gap-y-6 ">
          <div className="relative w-88 ">
            <input
              dir="ltr"
              className="font-light text-sm bg-white text-black w-full p-4 pl-10 focus:outline-none focus:border-[#F8B53A] border border-white mainInput h-[50px] rounded-[10px] duration-200"
              type="text"
              placeholder={isEmailLogin ? "ایمیل" : "شماره موبایل"}
              maxLength={isEmailLogin ? 50 : 11}
              ref={isEmailLogin ? emailRef : phoneRef}
            />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <img
                src={isEmailLogin ? mail : phone}
                alt="icon"
                className="w-5 h-5"
                draggable={false}
              />
            </span>
          </div>
          {isEmailLogin && (
            <>
              <div className="relative w-88 ">
                <input
                  dir="ltr"
                  type={showPassword ? "text" : "password"}
                  placeholder="رمز عبور"
                  className="font-light text-sm bg-white text-black w-full p-4 pl-10 focus:outline-none focus:border-[#F8B53A] border border-white mainInput h-[50px] rounded-[10px] duration-200"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
            </>
          )}
        </div>
        <button
          className="cursor-pointer w-88 h-12 rounded-[10px] bg-[#F8B53A] text-white font-normal text-lg mx-auto "
          color="primary"
          disabled={loading}
          onClick={
            isEmailLogin ? () => handleEmailLogin() : () => handlePhoneLogin()
          }
        >
          {loading ? (
            <span className="loaderLogin"></span>
          ) : isEmailLogin ? (
            "ورود"
          ) : (
            "ادامه"
          )}
        </button>
      </div>
      <div className="flex flex-col justify-center items-center mt-5">
        <p
          className="text-[#444444] hover:text-[#F8B53A] font-light text-sm cursor-pointer select-none mt-4"
          onClick={() => setIsEmailLogin(!isEmailLogin)}
        >
          {isEmailLogin ? "ورود با شماره موبایل" : "ورود با ایمیل"}
        </p>
      </div>
    </>
  );
}
