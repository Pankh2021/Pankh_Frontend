import { ThemeProvider } from 'next-themes'
  
import "../styles/style.scss";
import "antd/dist/antd.css";
import { useState, useEffect } from "react";
import 'tailwindcss/tailwind.css'
import '../styles/index.css'
import '../styles/swiper.css';
import '../styles/nav.css';
import { AuthUserProvider } from '../firebase/authuserprovider';
import AuthContext from '../auth/context';

function MyApp({ Component, pageProps }) {

  const [user, setUser] = useState();
    return (
     <>
      <AuthContext.Provider value={{user, setUser}}>
     <AuthUserProvider>
      <Component {...pageProps} />
     </AuthUserProvider>
      
     </AuthContext.Provider>
      
    </>
    )
  }

export default MyApp