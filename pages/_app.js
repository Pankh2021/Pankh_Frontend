import { ThemeProvider } from 'next-themes'
  
import "../styles/style.scss";
import "antd/dist/antd.css";
import { useState, useEffect } from "react";
import 'tailwindcss/tailwind.css'
import '../styles/index.css'
import '../styles/swiper.css';
import '../styles/nav.css';
import { AuthUserProvider } from '../firebase/authuserprovider';

function MyApp({ Component, pageProps }) {

    return (
     <>
     <AuthUserProvider>
      <Component {...pageProps} />
     </AuthUserProvider>
      
    </>
    )
  }

export default MyApp