/* ============================================
   2. ENHANCED CAROUSEL COMPONENT (Carousal.js)
   ============================================ */

import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import ScrollDown from "../scroll-down/ScrollDown";
import "./carousal.css";

import Slide1 from "../../assets/img/carousal/slide1.jpg";
import Slide2 from "../../assets/img/carousal/slide2.jpg";
import Slide3 from "../../assets/img/carousal/slide3.jpg";

const CustomCarousel = () => {
    return (
        <div id="home" style={{ position: 'relative', overflow: 'hidden' }}>
            <Carousel 
                controls={false} 
                indicators 
                interval={2500} 
                pause={false}
                fade={true}
            >
                <Carousel.Item>
                    <img className="d-block w-100 custom-img" src={Slide1} alt="First slide"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100 custom-img" src={Slide2} alt="Second slide"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100 custom-img" src={Slide3} alt="Third slide"/>
                </Carousel.Item>
            </Carousel>
            <ScrollDown/>
        </div>
    )
}

export default CustomCarousel;
