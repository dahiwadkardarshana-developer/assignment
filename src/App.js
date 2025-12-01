import React from 'react';
import { useEffect } from 'react'
import './App.css'; 
import AOS from 'aos';
import "aos/dist/aos.css";
import HeaderStrip from './module/HeaderStrip';
import NavBar from './module/NavBar';
import HeroBanner from './module/HeroBanner';
import Ventures from './module/Ventures';
import Mission from './module/Mission';
import Sectors from './module/Sectors';
import Integrat from './module/Integrat';
import Counter from './module/Counter';
import Blogs from './module/Blogs';
import Footer from './module/Footer';
import Footermenu from './module/Footermenu';



function App() {
   // Initialize AOS when the component mounts
  useEffect(() => {
    AOS.init({
      duration: 1500,  // Global duration for animations
      easing: 'ease-in-out',
      once: false,      // Animation happens only once
      mirror: true , 
    });

    // Optional: Clean up AOS on unmount
    return () => {
      AOS.refreshHard();
    };
  }, []);
  
  return (
    <div className="App">

      <HeaderStrip/>
      <NavBar />
      <HeroBanner/>
      <Ventures/>
      <Mission/>
      <Sectors/>
      <Integrat/>
      <Counter/>
      <Blogs/>
      <Footer/>
      <Footermenu/>
   
  
     
       
    </div>
  );
}

export default App; // Exports the component so index.js can use it