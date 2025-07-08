const BASE_URL = "http://pawsi.ir/api";
const urls = {
  //signup apis
  registerUser: `${BASE_URL}/user/register/`,
  //login apis
  loginWithEmail: `${BASE_URL}/user/login/email/`,
  loginWithPhoneNumber: `${BASE_URL}/user/login/phone/send-otp/`,
  autoLoginAndGetProfile:`${BASE_URL}/user/profile/`,
  //verify apis
  verifyPhoneNumber: `${BASE_URL}/user/login/phone/verify-otp/`,
};
export default urls;
