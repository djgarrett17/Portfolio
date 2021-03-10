import React, { useState } from 'react'

import firebase from './Firebase.js'

const GetSampleForm = () => {

  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [street, setStreet] = useState('')
  const [apt, setApt] = useState('')
  const [cityState, setCityState] = useState('')
  const [zip, setZip] = useState('')

  


  function onSubmit(e){
    
    e.preventDefault()
    console.log("submit form")
    console.log(name)

    firebase
    .firestore()
    .collection('kingtest')
    .add({
      name,
      email,
      street,
      apt,
      cityState,
      zip
    })
    .then(() => {
      setName('')
      setEmail('')
      setStreet('')
      setApt('')
      setCityState('')
      setZip('')
    })
  }


    return (
        <form className="bigField" onSubmit={onSubmit}>
            <div className="checkoutField">
                <label className="checkoutLabel" >Email</label>
                    <input value={email} onChange={e => setEmail(e.currentTarget.value)} id="custEmail" className="checkoutInput" placeholder="youremail@mail.com"></input>
                </div>
                 
            <div className="checkoutField">
                
                <label className="checkoutLabel">Full name</label>
                <input value={name} onChange={e => setName(e.currentTarget.value)} type="text" id="custName" className="checkoutInput" placeholder="First Last"></input>
                </div>
            <div className="checkoutField">
                    <label className="checkoutLabel">Street Address</label>
                    <input id="custStreet"className="checkoutInput" placeholder="1234 Journey Blvd"></input>
                </div>
                <div className="checkoutField">
                    <label className="checkoutLabel">Apt, Unit, Bldg</label>
                    <input id="custApt"className="checkoutInput" placeholder="Unit B"></input>
                </div>
                    <div className="checkoutField">
                    <label className="checkoutLabel">City, State</label>
                    <input id="custCityState"className="checkoutInput" placeholder="Portland, OR"></input>
                </div>
                <div className="checkoutField">
                    <label className="checkoutLabel">Zip Code</label>
                    <input id="custZip"className="checkoutInput" placeholder="Zip Code"></input>
                </div>

                
                <div className="freeSubmit">
                        <span id="freeSuccess" className="trans">Thank you so much! We will send you a confirmation e-mail shortly.</span>
                        <span id="warning" className="trans">Please fill in the required fields.</span>
                        <button onClick={onSubmit} id="getFree"className="sendBtn midtransition">
                            Get free bottle
                        </button>
                    </div>
                
            </form>
    )
}

export default GetSampleForm