import CryptoJS from "crypto-js";

const SECRET_KEY = import.meta.env.VITE_SECRET_KEY;

export default function decryptCookie(name) {
  const getCookie = (name) => {
    const match = document.cookie.match(
      new RegExp("(^| )" + name + "=([^;]+)")
    );
    return match ? match[2] : null;
  };

  const encryptedValue = getCookie(name);
  if (!encryptedValue) return null;

  try {
    const bytes = CryptoJS.AES.decrypt(encryptedValue, SECRET_KEY);
    const decrypted = bytes.toString(CryptoJS.enc.Utf8);
    return decrypted || null;
  } catch (error) {
    console.error("Decryption failed:", error);
    return null;
  }
}
