import React, { Component } from "react";
import { Link } from 'react-router-dom'

import './assets/css/style.css';
// import Home from '../../pages/Home.js'
// import './assets/css/mediaquerynav.css';
import { AiFillGithub } from "react-icons/ai";
// import { AiFillFacebook } from "react-icons/ai";

// import $ from 'jquery';

class Navbar extends Component {
  componentDidMount() {

    // function newDoc() {
    //     window.location.href = 'https://www.amazon.com/dp/0692175563/ref=cm_sw_em_r_mt_dp_U_o7T2Db7Y6GQPX';
    // }


}
    
render (){
    return(

        <div className="footer">
            <div className="mainFooter">
                <div className="footerLogoBigDiv">
                    <div className="footerLogoDiv">
                    <img id="footImage1" src="./assets/images/logowhite.png" alt="Front Cover"></img>
                    </div>
                </div>
                
                
                <div className="footerSocial">
                <div className="footerEachSocialDiv">
                    <a href="https://github.com/djgarrett17" className="visitFacebook">
                        <span className="footerAmazonTxt">Github</span>
                        <AiFillGithub size={30}></AiFillGithub>
                    </a>
                    </div>
                   
                </div> 
            </div>

            <div className="copyrightDiv">
                <span>Copyright. All Rights Reserved 2021.</span>  
            </div>
        </div>
    )
}
}


export default Navbar; 