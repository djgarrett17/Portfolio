import React, { Component } from "react";
import { Link } from 'react-router-dom'

import './assets/css/style.css';
// import Home from '../../pages/Home.js'
// import './assets/css/mediaquerynav.css';
import { AiOutlineMail } from "react-icons/ai";

import $ from 'jquery';

function Navbar() {

    // $(document).scroll(function() {
    //   var y = $(this).scrollTop();
    //   if (y > 2) {
    //     $("#navbar").css({"height": "100px"});
    //   } else {
    //       $("#navbar").css({"height": "125px"});
    //   }
    // });

    $(document).scroll(function() {
      var y = $(this).scrollTop();
      if (y > 240) {
        $("#navbar").css({"height": "0px"});
      } else {
          $("#navbar").css({"height": "100px"});
      }
    });

    // var modal = document.getElementById("myModal");
        // var modal = document.getElementsByClassName("modal");
        // Get the button that opens the modal
        // var btn = document.getElementById("menu");
        // Get the <span> element that closes the modal
        // var span = document.getElementsByClassName("close")[0];

        // var homeClose = document.getElementById("closeOne");
        // var aboutClose = document.getElementById("closeTwo");


      //   function ClickButton() {
      //     console.log("opened");
      //     // alert('button worked');
      //     // modal.style.height = "100%";
      //     $(".modal").css({"height": "100%"});
      // }

      // if (y > 2) {
      //   $("#navbar").css({"height": "100px"});
      // } else {
      //     $("#navbar").css({"height": "125px"});
      // }
      

      // When the user clicks on <span> (x), close the modal
      function SpanClickButton() {
      console.log("close");
      $(".modal").css({"height": "0%"});
      }

      function HomeClickButton() {
          console.log("closey");
          $(".modal").css({"height": "0%"});
      }
      function AboutClickButton() {
          console.log("closeer");
          $(".modal").css({"height": "0%"});
      }

  
    
      $(document).ready(function() {
      if (window.location.pathname === '/') {
        $('#navbar').css('background', 'transparent');
      }  
    })
  
    return(
      <div>
        <div id="navbar">
              {/* <div className="mobileMailDiv"> */}
                  <div className="navLogoDiv">
                    <a><img id="navImage1" src="./assets/images/HeaderPortfolio.png" alt="Front Cover"></img></a>
                  </div>
                  <div className="mailDiv">
                    <a className="mailIcon" href="mailto: djgarrett17@gmail.com"><AiOutlineMail id="mail" size={25} width="25px" height="25px"></AiOutlineMail></a>
                  </div>

              <div className="homeMenu">
                  <a className="homeNav" href = "mailto: djgarrett17@gmail.com"> Contact </a>
              </div>
              
              {/* <AiOutlineMenu id="menu" onClick={ClickButton} size={30} width="30px" height="30px"></AiOutlineMenu> */}
              {/* <img id="menu" onClick={ClickButton} src="./assets/images/icons/burgermenuwhite.png" alt="down" width="30px" height="30px"/> */}
              
              
                
                </div>




</div>



      
    )
}


export default Navbar; 