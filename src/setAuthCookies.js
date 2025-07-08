import CryptoJS from "crypto-js";

const SECRET_KEY = import.meta.env.VITE_SECRET_KEY;

export default function setAuthCookies(userData) {
  console.log(userData);
  const encrypt = (data) => {
    return CryptoJS.AES.encrypt(data, SECRET_KEY).toString();
  };

  const setCookie = (name, value) => {
    const expires = new Date(
      Date.now() + 7 * 24 * 60 * 60 * 1000
    ).toUTCString();
    document.cookie = `${name}=${value}; path=/; expires=${expires}; secure`;
  };

  const encryptedAccess = encrypt(userData.access);
  const encryptedRefresh = encrypt(userData.refresh);
  const encryptedEmail = encrypt(userData.email);
  const encryptedPhone = encrypt(userData.phone_number);
  const encryptedFname = encrypt(userData.firstname);
  const encryptedLname = encrypt(userData.lastname);

  setCookie("accessToken", encryptedAccess);
  setCookie("refreshToken", encryptedRefresh);
  setCookie("userEmail", encryptedEmail);
  setCookie("userPhone", encryptedPhone);
  setCookie("userFirstName", encryptedFname);
  setCookie("userLastName", encryptedLname);
}
