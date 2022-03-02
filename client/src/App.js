import { useEffect, useState, useRef } from 'react';
import Axios from 'axios'
import './App.css';

function App() {

  // Change the state variables then attempt  to update the server
  const [foodName, setFoodName] = useState('')
  const [days, setDays] = useState(0)
  const [newFoodName, setNewFoodName] = useState('')
  const [didUpdate, setDidUpdate] = useState(false)

  // array recieved from the server will have '.foodName, daysSinceIAte' properties
  const [foodList, setFoodList] = useState([])

  const addToList = () => {

    foodList.push({})
    // make a post to request to this directory with and object 
    // will be sent as JSON and then parsed by the backend server
    Axios.post("http://localhost:3001/insert", { foodName, days })
  }

  // PUT attempt update the foodName
  const updateFood = (id) => {
    setDidUpdate(!didUpdate);
    Axios.put("http://localhost:3001/update", {
      id: id,
      newFoodName: newFoodName
    })
  }

  // DELETE food local api req check quotes
  const deleteFood = (id) => {
    try {
      Axios.delete(`http://localhost:3001/delete/${id}`)
    } catch (err) {
      console.log(err)
    }
  }


  // call whenever we render the page but is only called once
  // make a GET request on the server to get data
  // then update the foodList variable from values from the server
  // 

  //  React.useEffect(() => {
  //   if (didMount.current) {
  //     console.log('I run only if toggle changes.');
  //   } else {
  //     didMount.current = true;
  //   }
  // }, [toggle]);



  useEffect(() => {
    Axios.get("http://localhost:3001/read").then(response => {
      setFoodList(response.data)
    })
  }, [didUpdate])

  return (
    <div className="App">
      <h1>CRUD APP with MERN</h1>

      <label htmlFor="">Food Name</label>
      <input type="text" onChange={(e) => { setFoodName(e.target.value) }} />

      <label htmlFor="">Days since Eaten</label>
      <input type="number" name="" id="" onChange={(e) => { setDays(e.target.value) }} />
      <button onClick={addToList}>Add To List</button>

      <h1>food List</h1>
      {foodList.map((val, key) => {
        return (
          <div key={key} className="food">
            <h1>Food Item: {val.foodName}</h1>
            <h1>Last Ate {val.daysSinceIAte} Days Ago</h1>
            <input type="text" placeholder='New Food Name..?' onChange={(e) => setNewFoodName(e.target.value)} />
            <button onClick={() => updateFood(val._id)}>Update</button>
            <button onClick={() => deleteFood(val._id)}>Delete</button>
          </div>
        )
      })}
    </div>
  );
}

export default App;
