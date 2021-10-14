import React, { Component } from "react";
import { Link } from 'react-router-dom'

import './styles/Home.css';
import $ from 'jquery';

import Mailchimp from 'react-mailchimp-form'
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';
import MyCarousel from '../components/carousel/Carousel.js'
import MyCarouselMobile from '../components/carousel/CarouselMobile.js'

import { BsArrowRightShort } from "react-icons/bs";

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
            <div>
                <p className="subscribeTxt">Subscribe to my newsletter to receive your prize!</p>
            </div>
            <div className="emailDiv">
            <Mailchimp 
                action="https://kingpong.us7.list-manage.com/subscribe/post?u=bdd1fa2695abb33207f964b14&amp;id=ed81bdc154"
                fields={[
                  {
                    name: 'EMAIL',
                    placeholder: 'Enter your email',
                    type: 'email',
                    required: true
                  }
                ]}
                messages = {
                    {
                      sending: "Sending...",
                      success: "Thank you for subscribing!",
                      error: "An unexpected internal error has occurred.",
                      empty: "Please enter valid email.",
                      duplicate: "Too many subscribe attempts for this email address",
                      button: <BsArrowRightShort size={"32px"} />
                    }
                  }
                />
            </div>
        </div>  
        
    )
            }


 
export default Home;