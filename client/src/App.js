import { useState } from 'react';
import Axios from 'axios'
import './App.css';

function App() {

  const [foodName, setFoodName] = useState('')
  const [days, setDays] = useState(0)

  const addToList = () => {
    // make a post to request to this directory with and object 
    // will be sent as JSON and then parsed by the backend server
    Axios.post("http://localhost:3001/insert", { foodName, days })
  }


  return (
    <div className="App">
      <h1>CRUD APP with MERN</h1>

      <label htmlFor="">Food Name</label>
      <input type="text" onChange={(e) => { setFoodName(e.target.value) }} />
      <label htmlFor="">Days since Eaten</label>
      <input type="number" name="" id="" onChange={(e) => { setDays(e.target.value) }} />
      <button onClick={addToList}>Add To List</button>
    </div>
  );
}

export default App;
