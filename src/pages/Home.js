import React, { Component } from "react";
import { Link } from 'react-router-dom'

import './styles/Home.css';
import $ from 'jquery';

// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';
import MyCarousel from '../components/carousel/Carousel.js'
import MyCarouselMobile from '../components/carousel/CarouselMobile.js'

const Home = () => {

    

            return(
               
        <div className="homeWrap">
            <div>
                <p className="titleTxt">My Work</p>
            </div>
            <div className="carouselDiv">
                <div className="carouselDesktop">
                    <MyCarousel/>
                </div>
                <div className="carouselMobile">
                    <MyCarouselMobile/>
                </div>
            </div>
        </div>  
        
    )
            }


 
export default Home;