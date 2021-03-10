import React, { Component } from "react";
import { Link } from 'react-router-dom'

import './styles/Home.css';
import $ from 'jquery';

// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';
import MyCarouselMailchimp from '../components/carousel/CarouselMailchimp.js'
import MyCarouselMailchimpMobile from '../components/carousel/CarouselMailchimpMobile.js'

const Mailchimp = () => {

    

            return(
               
        <div className="homeWrap">
            <div>
                <p className="titleTxt">Mailchimp Project</p>
            </div>
            <div className="carouselDiv">
                <div className="carouselDesktop">
                    <MyCarouselMailchimp/>
                </div>
                <div className="carouselMobile">
                    <MyCarouselMailchimpMobile/>
                </div>
            </div>
        </div>  
        
    )
            }



export default Mailchimp;