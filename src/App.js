import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState({
    fname: "",
    lname: ""
  });

  const [showdata, setshowdata] = useState(false)

  const handleChange = (e) => {
    setName({ ...name, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
    setshowdata(true)
  };

  return (
    <>
      <div>
        <h1>Full Name Display</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="fname">First Name</label>
            <input onChange={handleChange} type="text" id="fname" value={name.fname} name="fname" required />
          </div>
          <div>
            <label htmlFor="lname">Last Name</label>
            <input onChange={handleChange} type="text" id="lname" value={name.lname} name="lname"  required/>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
     {
      showdata && <div>
      Full Name : {name.fname} {name.lname}
    </div>
     } 
    </>
  );
}

export default App;
