import axios from "axios";
import decryptCookie from "./decryptCookie";
import urls from "./urls";

export async function fetchUserProfile() {
  const token = decryptCookie("accessToken");
  if (!token) return null;
    console.log(token)
  try {
    const response = await axios.get(urls.autoLoginAndGetProfile, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (err) {
    console.error("User profile fetch error:", err);
    return null;
  }
}
