import { useEffect } from "react";
import Hero from "./components/Hero";
import Careers from "./components/Careers";
import Events from "./components/Events";
import Footer from "./components/Footer";

const App = () => {
  
  useEffect(()=>{
    window.onscroll = () => {
      let offset = document.querySelector('#about').offsetHeight
      let top = window.scrollY

      if(top > offset) {
        document.querySelector('nav').style.backgroundColor = 'black'
        document.querySelector('nav').style.boxShadow = '0 5px 10px white'
        document.querySelector('nav').style.paddingBlock = '40px'
        if(window.innerWidth <= 650) {
          document.querySelector('nav').style.paddingBlock = '40px'
        }
      } else {
        document.querySelector('nav').style.backgroundColor = 'unset'
        document.querySelector('nav').style.boxShadow = 'unset'
        document.querySelector('nav').style.paddingBlock = '4rem'
        if(window.innerWidth <= 650) {
          document.querySelector('nav').style.paddingBlock = '40px'
        }
      }
    }
  }, [])

  return (
    <main>
      <Hero />
      <Careers />
      <Events />
      <Footer />
    </main>
  )
}

export default App;
