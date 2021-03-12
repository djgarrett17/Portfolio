import React, { Component } from 'react';
import ReactCardCarousel from 'react-card-carousel';
import './assets/css/style.css';
import { Link } from 'react-router-dom'

class MyCarouselMobile extends Component {

  static get CARD_STYLE() {
    return {
      height: '200px',
      width: '200px',
      paddingTop: '10px',
      paddingBottom: '10px',
    //   textAlign: 'center', 
      background: 'black',
      color: 'white',
      fontSize: '12px',
      textTransform: 'uppercase',
      borderRadius: '5px',
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    };
  }

  static get CONTAINER_STYLE() {
    return {
      position: "relative",
      height: "100%",
      width: "100%",
      display: "flex",
      justifyContent: "center",
    //   margin: "auto"
    };
  }

  
  static get INNER_CARD_STYLE() {
    return {
      textDecoration: "none",
      color: "white",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      
    //   margin: "auto"
    };
  }

  static get CARD_DESC_STYLE() {
    return {
      color: "lightgray",
      display: "flex",
      width: "80%",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      

      
    //   margin: "auto"
    };
  }




  render() {
    return (
        <div style={MyCarouselMobile.CONTAINER_STYLE}>
      <ReactCardCarousel autoplay={ true } autoplay_speed={ 6000 }>
        <div style={ MyCarouselMobile.CARD_STYLE }>
          <a style={ MyCarouselMobile.INNER_CARD_STYLE } target="_blank" href="https://adjective.media">
            <img src="./assets/images/adj-02.png" height="50px"/>
            <p>adjective.media</p>
          </a>
          <div style={ MyCarouselMobile.CARD_DESC_STYLE }>
            <p>The website of a web development start up company</p>
          </div>
        </div>
        <div style={ MyCarouselMobile.CARD_STYLE }>
          <a style={ MyCarouselMobile.INNER_CARD_STYLE } target="_blank" href="https://kingpong.co">
            <img src="./assets/images/weblogo.png" height="50px"/>
            <p>kingpong.co</p>
          </a>
          <div style={ MyCarouselMobile.CARD_DESC_STYLE }>
            <p>The website of King Pong LLC, an online table tennis business</p>
          </div>
        </div>
        <div style={ MyCarouselMobile.CARD_STYLE }>
          <Link style={ MyCarouselMobile.INNER_CARD_STYLE } to="/mailchimp">
            <img src="./assets/images/MailchimpImage.png" height="50px"/> 
            <p>MailChimp Project</p>
          </Link>
          <div style={ MyCarouselMobile.CARD_DESC_STYLE }>
            <p>A newsletter campaign created using Mailchimp</p>
          </div>
        </div>
        <div style={ MyCarouselMobile.CARD_STYLE }>
          <a style={ MyCarouselMobile.INNER_CARD_STYLE } target="_blank" href="https://covid-19inreal-time.com">
            <img src="./assets/images/covid-title-red-white-no-bkgd.png" height="50px"/>
            <p>covid-19inreal-time.com</p>
          </a>
          <div style={ MyCarouselMobile.CARD_DESC_STYLE }>
            <p>The website of a published book about COVID-19</p>
          </div>
        </div>
      </ReactCardCarousel>
      </div>
    );
  }
}

export default MyCarouselMobile;