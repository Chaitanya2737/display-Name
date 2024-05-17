import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [name, setName] = useState({
    fname: "",
    lname: ""
  });

  const [showData, setShowData] = useState(false);

  const handleChange = (e) => {
    setName({
      ...name,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowData(true);
  };

  return (
    <>
      <div>
        <h1>Full Name Display</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="fname">First Name</label>
            <input 
              onChange={handleChange} 
              type="text" 
              id="fname" 
              value={name.fname} 
              name="fname" 
              required 
            />
          </div>
          <div>
            <label htmlFor="lname">Last Name</label>
            <input 
              onChange={handleChange} 
              type="text" 
              id="lname" 
              value={name.lname} 
              name="lname" 
              required 
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      {showData && (
        <div id="fullNameDisplay">
          Full Name: {name.fname} {name.lname}
        </div>
      )}
    </>
  );
}

export default App;
