import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { validateSignup } from '../Redux/Actions/validateSignup';
import NavGuest from './NavGuest';
import FooterGuest from './FooterGuest';
import '../html-css/css/signup-guest.css'

function SignupGuest(props) {
    const navigate = useNavigate();
    const [firstNameInput, setFirstNameInput] = useState('');
    const [lastNameInput, setLastNameInput] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [newPasswordInput, setNewPasswordInput] = useState('');
    const [cityInput, setCityInput] = useState('');
    const [stateInput, setStateInput] = useState('');
    const [pictureInput, setPictureInput] = useState('');
    const [agreementInput, setAgreementInput] = useState('');
    // A new file needs to be written at ../Redux/Actions/validateSignup
    const handleSignup = (firstNameInput, lastNameInput, emailInput, newPasswordInput, cityInput, stateInput, pictureInput, agreementInput) => {
        const isValidSignup = props.validateSignup(firstNameInput, lastNameInput, emailInput, newPasswordInput, cityInput, stateInput, pictureInput, agreementInput);
        if(isValidSignup) {
            navigate('/loginGuest')
        } else {
            const msgContainer = document.getElementById('msg-container');
            msgContainer.style.color = 'red';
            msgContainer.innerHTML ='Signup failed. Please enter all required information.';
        }    
    }
  return (
    <div>
      <NavGuest />
      <main className="main" role="main">
    <div className="bg-white">
      <div className="col-md-6 offset-md-3">
          <h1 id="title">Cultivate Community</h1>
          <h2 id="signup">Sign Up</h2><br/>
          <form className="row g-3">
            <div className="col-md-6">
                <label for="firstname" className="form-label">First Name</label>
                <input type="text" className="form-control" value={firstNameInput} onChange={e => setFirstNameInput(e.target.value)} />
            </div>
            <div className="col-md-6">
                <label for="lastname" className="form-label">Last Name</label>
                <input type="text" className="form-control"value={lastNameInput} onChange={e => setLastNameInput(e.target.value)} />
            </div><br/><br/>
            <div className="col-md-6">
                <label for="inputEmail4" className="form-label">Email</label>
                <input type="email" className="form-control" id="inputEmail4" value={emailInput} onChange={e => setEmailInput(e.target.value)} />
            </div>
            <div className="col-md-6">
                <label for="inputPassword4" className="form-label">Password</label>
                <input type="password" className="form-control" id="inputPassword4" value={newPasswordInput} onChange={e => setNewPasswordInput(e.target.value)} />
            </div><br/><br/>
            <div className="col-md-6">
                <label for="city" className="form-label">City</label>
                <input type="text" className="form-control" value={cityInput} onChange={e => setCityInput(e.target.value)} />
            </div>
            <div className="col-md-6">
                <label for="state" className="form-label">State</label>
                <input type="text" className="form-control" value={stateInput} onChange={e => setStateInput(e.target.value)} />
            </div><br/><br/>
            <div className="mb-3">
                <label for="formFile" className="form-label">Add a profile picture</label>
                <input className="form-control" type="file" id="formFile" value={pictureInput} onChange={e => setPictureInput(e.target.value)} />
            </div><br/><br/>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" value={agreementInput} onChange={e => setAgreementInput(e.target.value)} />
              <label className="form-check-label" for="exampleCheck1">I agree to share my information with Cultivate Community.</label>
            </div><br/><br/>
            <div className="d-grid gap-2 col-6 mx-auto">
                <button onClick={() => {handleSignup(firstNameInput, lastNameInput, emailInput, newPasswordInput, cityInput, stateInput, pictureInput, agreementInput)}} className="btn btn-lg btn-success">Submit</button>
            </div>
            
          </form>
      </div>
    </div>
    
  </main>
    <FooterGuest />
    </div>
  )
}


function mapStateToProps(reduxState) {
    return {
        firstNameInput: reduxState.user.firstname,
        lastNameInput: reduxState.user.lastname,
        emailInput: reduxState.user.email,
        newPasswordInput: reduxState.user.newpassword,
        cityInput: reduxState.user.city,
        stateInput: reduxState.user.state,
        pictureInput: reduxState.user.picture,
        agreementInput: reduxState.user.agreement,
        username: reduxState.user.username,
        password: reduxState.user.password,
    }
}

export default connect(mapStateToProps, { validateSignup })(SignupGuest);