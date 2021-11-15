import React, { useState } from 'react';
import { connect } from 'react-redux';

function AddCareMember(props) {
    const [showAddCareMember, setShowAddCareMember] = useState(false);
    const [firstNameInput, setFirstNameInput] = useState('');
    const [lastNameInput, setLastNameInput] = useState('');
    const [smsAddressInput, setSmsAddressInput] = useState('');
    const [phoneInput, setPhoneInput] = useState('');
    const toggleAddCareMember = () => {
        return setShowAddCareMember(!showAddCareMember);
    };
    const handleAddCareMember = (firstNameInput, lastNameInput, smsAddressInput, phoneInput) => {
        props.addCareMember(firstNameInput, lastNameInput, smsAddressInput);
            
    }
    return (
        <div>
            {showAddCareMember === false ?
                (
                    <button type="button" className="btn btn-warning" onClick={toggleAddCareMember}>
                        Add Care Team Member
                    </button>
                ):
                (
                    <div>
                        <form>
                            <div className="form-group">
                                <label>First Name</label>
                                <input className="form-control form-control-lg" type="text" name="firstNameInput" value={firstNameInput} onChange={e => setFirstNameInput(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label>Last Name</label>
                                <input className="form-control form-control-lg" type="text" name="lastNameInput" value={lastNameInput} onChange={e => setLastNameInput(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label>SMS Address</label>
                                <input className="form-control form-control-lg" type="email" name="smsAddressInput" value={smsAddressInput} onChange={e => setSmsAddressInput(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label>Phone Number</label>
                                <input className="form-control form-control-lg" type="tel" name="phone" value={phoneInput} onChange={e => setPhoneInput(e.target.value)} />
                            </div>
                            <div className="text-center mt-3">
                            <button  type="button" className="btn btn-warning" style={{marginRight: "5px"}} onClick={toggleAddCareMember}>
                                Cancel
                            </button>
                            <button  type="button" className="btn btn-warning" onClick={() => handleAddCareMember()}>
                                Save
                            </button>
                            </div>
                        </form>
                    </div>
                )
            }
        </div>
    )
}

function mapStateToProps(reduxState) {
    return {
        firstName: reduxState.careMember.firstName,
        lastName: reduxState.careMember.lastName,
        smsAddress: reduxState.careMember.smsAddress,
        phone: reduxState.careMember.phone,
        loading: reduxState.careMember.loading
    }
}

export default connect(mapStateToProps)(AddCareMember);