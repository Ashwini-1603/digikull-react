import React from 'react';
import './App.css';
import { useState, useEffect } from "react";
function App() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [postdata, setPostdata] = useState([]);
  function saveUser() {
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
      }),
    }).then((request) =>
      request.json().then((resp) => {
        setPostdata([resp]);
        getdata()
      })
    );
  }
  // this is use to fetch the data
  useEffect(() => {
    getdata()
  }, []);
  console.log("data", data)
  function getdata() {
    // https://jsonplaceholder.typicode.com/users
    fetch(" https://jsonplaceholder.typicode.com/users")
      .then((request) =>  request.json())
      .then((resp) => {setData(resp)})
  }

  function deleteUser(id){
    fetch(` https://jsonplaceholder.typicode.com/users/${id}`,{
      method:"DELETE"
    }).then((result)=>{
      result.json().then((resp)=>{alert(id)})
    })
  }
  return (
    <div className="App">
      <h1>Digikull students</h1>
      <header className="App-header">
        <div>
          <label>name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="button" onClick={saveUser}>
            add user name
          </button>
        </div>
        {/* this is use to fetch the data */}
        <table>
          <tr>
            <td>id</td>
            <td>name</td>
          </tr>
          {data.map((item, i) =>
            <tr key={i}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td><button onClick={()=>deleteUser(item.id)}>Delete</button></td>
            </tr>
          )}
        </table>

        {/* update form  */}
        {/* <div>
        <input type="text" value={Uid}/><br/>
        <input type="text" value={Uname}/><br/>
        <button >update</button>
      </div> */}
      </header>
  
    </div>
  );
}
export default App;