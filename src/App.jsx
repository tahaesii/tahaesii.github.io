import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import LoginAndSignUpForm from "./components/Login/loginAndSignUpForm";
import AOS from "aos";
import "aos/dist/aos.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/Home/Home";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { fetchUserProfile } from "./fetchUserProfile";
import { useEffect, useState } from "react";

AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init", // class applied after initialization
  animatedClassName: "aos-animate", // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 600, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

function Layout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  useEffect(() => {
    const init = async () => {
      if (location.pathname === "/login") return;

      const userData = await fetchUserProfile();
      if (userData) {
        setUser(userData);
        console.log("User data:", userData);
      } else {
        toast.error("لطفاً وارد حساب خود شوید");
      }
    };

    init();
  }, [location.pathname]);
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        draggable
      />
      {location.pathname !== "/login" && (
        <div className='w-full sticky top-0 h-[10rem] z-40  bg-[#FFF8EE]'>
          <Header />
        </div>
      )}
      <div id="body" >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginAndSignUpForm />} />
        </Routes>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}
export default App;
