import React from "react";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

 const Silder = () => {
   const renderSlider = (src)=>{
     return  <div className="img__carousel" >
     <img alt="" src= {src} height={500}/>
   </div>
   }
   return(
  <Carousel className="carousel" autoPlay={2000} showThumbs={false} infiniteLoop  showIndicators={false} showStatus={false} className='carousel'>
   {renderSlider("https://wallpaperaccess.com/full/934072.jpg")}
   {renderSlider("https://wallpaperaccess.com/full/934072.jpg")}
  </Carousel>
);
   }
export default Silder