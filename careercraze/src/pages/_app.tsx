import "@/styles/globals.css";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import { store } from "@/Stores/store";
import { Provider,useDispatch } from "react-redux";
import { useEffect } from "react";
import { auth } from "@/Firebase/firebase";
import { login, logout } from "@/Features/Userslice";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  function AuthListener() {
    const dispatch = useDispatch();
    useEffect(() => {
      auth.onAuthStateChanged((authuser) => {
        if (authuser) {
          dispatch(
            login({
              uid: authuser.uid,
              photo: authuser.photoURL,
              name: authuser.displayName,
              email: authuser.email,
              phoneNumber: authuser.phoneNumber,
            })
          );
        } else {
          dispatch(logout());
        }
      });
    }, [dispatch]);
    return null;
  }

  return (
    <Provider store={store}>
      <AuthListener />
      <div className="bg-white">
        <ToastContainer/>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </Provider>
  );
}
