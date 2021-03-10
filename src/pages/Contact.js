import React, { useState } from "react";
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import GetSampleForm from '../components/Firebase/GetSampleForm.js'
import firebase from '../components/Firebase/Firebase.js'

import $ from 'jquery'
import './styles/Contact.css';
import { user } from "firebase-functions/lib/providers/auth";

const Contact = () => {
    
  const [shipEmail, setShipEmail] = useState('')
  const [shipName, setShipName] = useState('')
  const [shipMessage, setShipMessage] = useState('')
 

  function shippingValidate(e){
    e.preventDefault()

    var shippingEmailInput = $("#shippingEmail").val().trim();
    var shippingNameInput = $("#shippingName").val().trim();
    var shippingMessageInput = $("#shippingMessage").val().trim();
    
    var user = {
      email: shippingEmailInput
    }
    if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test($("#shippingEmail").val()))   {
        if (shippingEmailInput === "" || shippingNameInput === "" || shippingMessageInput === "" ) {
          alert( "Please fill in required fields." );
        }
        else{

        localStorage.setItem('user', JSON.stringify(user))
        console.log ('sent shipping info ' + shipEmail)
        console.log ('sent shipping info ' + shipName)
        newShipping()
        
        // console.log('claim status 2' + claim)
        $( "#submitShipping" ).click(function(){
            $(".sentMessage").css("display", "flex");
        })
 


        }
      } 
      else{
        alert('Please enter valid email.')
      }
  }

  function newShipping(){
    // e.preventDefault()
    console.log("newShipping")
    console.log(shipName)

    firebase
    .firestore()
    .collection('user')
    .doc((shipEmail))
    .set({
      name: shipName,
      email: shipEmail,
      message: shipMessage,
    })
    .then(() => {
      console.log('then' + shipEmail)
      // getDocument();
      setShipName('')
      setShipEmail('')
      setShipMessage('')

    //   window.location.pathname = "/Payment"
      // sendMail()
    })
  }
  

    return(
        <div className="shippingWrap">
            <div className="shipFormDiv"> 
                <form className="bigShipField">
                {/* <form className="bigShipField" onSubmit={shippingValidate}> */}
                    <h3 className="formHeader">Contact</h3>
                    
                    <div className="checkoutField1">
                            {/* <label className="checkoutLabel">Name</label> */}
                            <input value={shipName} onChange={e => setShipName(e.currentTarget.value)} type="text" id="shippingName" className="checkoutInput" placeholder="Name"></input>
                        </div>
                    <div className="checkoutField2"> 
                            {/* <label className="checkoutLabel" >Email</label> */}
                            <input value={shipEmail} onChange={e => setShipEmail(e.currentTarget.value)} id="shippingEmail" className="checkoutInput" placeholder="Email"></input>
                        </div>
                    
                        <div className="checkoutField3">
                            {/* <label className="checkoutLabel">Message</label> */}
                            {/* <input value={shipMessage} onChange={e => setShipMessage(e.currentTarget.value)} type="text" id="shippingMessage" className="checkoutInput" placeholder="Message"></input> */}
                            <textarea value={shipMessage} onChange={e => setShipMessage(e.currentTarget.value)} id="shippingMessage" className="checkoutInput" placeholder="Message"></textarea>
                        </div>
                
                        <button id="submitShipping"className="sendBtn midtransition" onClick={shippingValidate}>
                        Send Message
                        </button>
                        <h4 className="sentMessage">Message Sent!</h4>
                </form>
                        
            </div>  

        </div>
    )
}


export default Contact;
