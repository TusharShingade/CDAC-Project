import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

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
        //alert('Amount Added');
        updateUserWallet(wallet); // Update the wallet amount in user state
        setWallet(); // Reset the input field
        navigate('/walletsuccess') // Navigate to '/adminhome' route

      })
      .catch(error => {
        alert('Server Error. Try After Some Time');
      });

  };

  return (
    <div style={{ backgroundImage: `url(https://c0.wallpaperflare.com/preview/880/100/57/leather-wallet-business-cards.jpg)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', minHeight: '93vh'  }}>
   <div className="container-fluid mt-5 col-5 fw-bold border bg-white text-dark">
      <h1>Wallet Information</h1>
      <div>
        <h3 className='text-success'> Welcome {user && user.fname}</h3>
        <h3 className='text-success'> Amount :: {user && user.wallet}</h3>
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
      <div>
        <button className='btn btn-primary btn-sm'><h4><Link to="/customerhome" className='nav-link px-3 text-light '>Back</Link></h4></button>
       </div>
    </div>
    </div>
  );
}