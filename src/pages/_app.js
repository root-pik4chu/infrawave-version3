import { AnimatePresence } from "framer-motion";
import Navbar from "../NavBar/Navbar";
import "../styles/globals.css";
import "../styles/styles.scss"
export default function App({ Component, pageProps ,router}) {

  return <>
  <Navbar />
  <AnimatePresence mode="wait">
        <Component  key={router.route} {...pageProps} />
      </AnimatePresence>
    
  </>
}
