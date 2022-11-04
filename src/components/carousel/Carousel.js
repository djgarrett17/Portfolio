import React, { Component } from 'react';
import ReactCardCarousel from 'react-card-carousel';
import { Link } from 'react-router-dom'
import './assets/css/style.css';

class MyCarousel extends Component {

  static get CARD_STYLE() {
    return {
      height: '300px',
      width: '350px',
      paddingTop: '20px',
      paddingBottom: '20px', 
    //   textAlign: 'center',
      background: 'black',
      color: 'white',
      fontSize: '16px',
      
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
      flexDirection: "column",
      width: "80%",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      
    //   margin: "auto"
    };
  }

  static get LINK_STYLE() {
    return {
      color: "white",
      lineHeight: "140%",

    //   margin: "auto"
    };
  }


  render() {
    return (
        <div style={MyCarousel.CONTAINER_STYLE}>
      <ReactCardCarousel autoplay={ true } autoplay_speed={ 6000 } spread="wide">
        <div style={ MyCarousel.CARD_STYLE }>
          <a style={ MyCarousel.INNER_CARD_STYLE } target="_blank" href="https://adjective.media">
            <img src="./assets/images/adj-02.png" height="80px"/>
            <p>ADJECTIVE.MEDIA</p>
          </a>
          <div style={ MyCarousel.CARD_DESC_STYLE }>
            <p>The website of a web development start up company</p>
          </div>
        </div>
        <div style={ MyCarousel.CARD_STYLE }>
          <a style={ MyCarousel.INNER_CARD_STYLE } target="_blank" href="https://kingpong.co">
            <img src="./assets/images/weblogo.png" height="80px"/>
            <p>KINGPONG.CO</p>
          </a>
          <div style={ MyCarousel.CARD_DESC_STYLE }>
            <p>The website of King Pong LLC, an online table tennis business</p>
          </div>
        </div>
        {/* <div style={ MyCarousel.CARD_STYLE }>
          <Link style={ MyCarousel.INNER_CARD_STYLE } to="/mailchimp">
            <img src="./assets/images/MailchimpImage.png" height="80px"/>
            <p>MAILCHIMP PROJECT</p>
          </Link>
          <div style={ MyCarousel.CARD_DESC_STYLE }>
            <p>A newsletter campaign created using Mailchimp</p>
          </div>
        </div> */}
       
        <div style={ MyCarousel.CARD_STYLE }>
          <a style={ MyCarousel.INNER_CARD_STYLE } target="_blank" href="https://devinsemailtemplates.com">
            <img src="./assets/images/template2.png" height="80px"/>
            <p>EMAIL TEMPLATES</p>
          </a>
          <div style={ MyCarousel.CARD_DESC_STYLE }>
            <p>Developed email templates with HTML:</p>
            <a style={ MyCarousel.LINK_STYLE } href="https://devinsemailtemplates.com"><p>View Templates</p></a>
          </div>
        </div>
      </ReactCardCarousel>
      </div>
    );
  }
}

export default MyCarousel;