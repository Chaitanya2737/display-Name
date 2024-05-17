import React, { useState } from 'react';
import './App.css';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFullName(`${firstName} ${lastName}`);
  };

  return (
    <div>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fname">First Name</label>
          <input 
            onChange={handleFirstNameChange} 
            type="text" 
            id="fname" 
            value={firstName} 
            name="fname" 
            required 
          />
        </div>
        <div>
          <label htmlFor="lname">Last Name</label>
          <input 
            onChange={handleLastNameChange} 
            type="text" 
            id="lname" 
            value={lastName} 
            name="lname" 
            required 
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {fullName && (
        <div id="fullNameDisplay">
          Full Name: {fullName}
        </div>
      )}
    </div>
  );
}

export default App;
