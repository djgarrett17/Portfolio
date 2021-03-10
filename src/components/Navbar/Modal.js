import React, { Component } from "react";
import { Link } from 'react-router-dom'
import './assets/css/style.css';
// import './assets/css/mediaquerynav.css';
import $ from 'jquery';


class Modal extends Component {
    componentDidMount() {

        var modal = document.getElementById("myModal");
        // var modal = document.getElementsByClassName("modal");
        // Get the button that opens the modal
        var btn = document.getElementById("menu");
        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        var homeClose = document.getElementById("closeOne");
        var aboutClose = document.getElementById("closeTwo");
        

         
      

        btn.onclick = function() {
            console.log("opened");
            alert('button worked');
            modal.style.height = "100%";
        }

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
        console.log("close");
        modal.style.height = "0%";
        }

        homeClose.onclick = function() {
            console.log("closey");
            modal.style.height = "0%";
        }
        aboutClose.onclick = function() {
            console.log("closeer");
            modal.style.height = "0%";
        }
      
}
render (){
  
   
    return(
        <div id="myModal" className="modal"> 
        <div className="modalContent">
            <span className="close">&times;</span>

            <div className="mobileMenu">

            <span > <Link to="/" id="closeOne" className="mobileNav" > Home</Link> </span>
            <span > <Link to="/About" id="closeTwo" className="mobileNav" > About</Link> </span>        
            <a className="homeNav closetoo" href="mailto: adjective.mediaco@gmail.com"><span className="mobileNav">Contact</span></a>
                <div className="socialDiv lilmargin">
                    <a target="_blank" href="https://www.instagram.com/the.adjective.media/"> <img className="socialIcon closetoo" src="./assets/images/icons/instaadj.png"></img></a>
                    <a target="_blank" href="https://www.facebook.com/adjective.media/"> <img className="socialIcon closetoo" src="./assets/images/icons/fbadj.png"></img></a>
                    <a target="_blank" href="https://www.linkedin.com/company/adjective-media/"><img className="socialIcon closetoo" src="./assets/images/icons/linkedadj.png"></img></a>
                </div>
            </div>
        </div>
    </div>
    )
    
}
}


export default Modal;
