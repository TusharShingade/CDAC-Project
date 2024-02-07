import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Routes, useNavigate } from 'react-router-dom';
import AdminHomeComp from './AdminHomeComp';

export default function ViewWallet() {
  const [wallet, setWallet] = useState(0);
  const [user, setUser] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
    setUser(loggedUser);
  }, []);

  const updateUserWallet = (newWallet) => {
    setUser(prevUser => ({ ...prevUser, wallet: newWallet }));
  };

  const sendData = (e) => {
    e.preventDefault();

    // Prepare the data to send to the server
    const data = {
      id: user.id,
      wallet: wallet
    };

    // Send the data to the server using axios
    axios.post('http://localhost:8080/updateWallet', data)
      .then(response => {
        alert('Amount Added');
        updateUserWallet(wallet); // Update the wallet amount in user state
        setWallet(0); // Reset the input field
        navigate('/adminhome'); // Navigate to '/adminhome' route
      })
      .catch(error => {
        alert('Server Error. Try After Some Time');
      });
  };

  return (
    <div>
      <h1>Wallet Information</h1>
      <div>
        <h3 className='text-success'> Welcome {user && user.fname}</h3>
        <h3 className='text-success'> {user && user.wallet}</h3>
      </div>
      <div>
        <form>
          <div className="mb-3">
            <label htmlFor="wallet" className="form-label">Enter Amount:</label>
            <input
              type="number"
              className="form-control"
              id="wallet"
              name="wallet"
              value={wallet}
              onChange={(e) => setWallet(e.target.value)}
            />
            <div className="d-grid gap-2">
              <button
                type="submit"
                className="btn btn-primary mb-3"
                onClick={(e) => sendData(e)}
              >
                Submit
              </button>
              <button
                type="reset"
                className="btn btn-secondary mb-3"
                onClick={() => setWallet(0)}
              >
                Reset
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
