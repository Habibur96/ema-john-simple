import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'

const Shipment = () => {
    const [user] = useAuthState(auth);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    // const navigate = useNavigate();

    const handleNameBlur = event => {
        setEmail(event.target.value);
    }


    const handleAddressdBlur = event => {
        setAddress(event.target.value);

    }

    const handlePhonedBlur = event => {
        setPhone(event.target.value);
    }


    const handleCreateUser = event => {
        event.preventDefault(); // To remove reload the page.
        const shipping = { name, email, address, phone };
        console.log(shipping);
    }

    return (
        <div className='form-container'>
            <div>

                <h2 className='form-title'>Shipping Information</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="name">Your Name</label>
                        <input onBlur={handleNameBlur} type="text" name="name" id="" required />
                    </div>


                    <div className="input-group">
                        <label htmlFor="email">Your Email</label>
                        <input value={user?.email} readOnly type="email" name="email" id="" required />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Address</label>
                        <input onBlur={handleAddressdBlur} type="text" name="password" id="" required />
                    </div>


                    <div className="input-group">
                        <label htmlFor="phone">Phone Number</label >
                        <input onBlur={handlePhonedBlur} type="text" name="phone" id="" required />
                    </div>

                    <p style={{ color: 'red' }}>{error}</p>

                    <input className='form-submit' type="submit" value="Add Shipping" /> <br /> <br /> <br /> <br />
                </form>


            </div>
        </div >
    );
};

export default Shipment;