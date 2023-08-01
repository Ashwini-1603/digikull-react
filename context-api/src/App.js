
import './App.css';
import { createContext,useEffect,useState } from 'react';
import A from './component/A';
const democontext=createContext();
function App() {
  const[data,setData]=useState(0)
  const[data1,setData1]=useState(1)
useEffect(()=>{
console.log("hi")
},[data])
  return (
    <div className="App">
<h1>{data}</h1>
<h1>{data1}</h1>
<button onClick={()=>setData(data+1)}>add</button>
<button onClick={()=>setData1(data1*10)}>add</button>
      <democontext.Provider value={"ashu"}>
      <A/>
      </democontext.Provider>
    </div>
  );
}
export {democontext};
export default App;

