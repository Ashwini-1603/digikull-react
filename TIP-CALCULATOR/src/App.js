import ExpenseItem from './component/ExpenseItem/ExpenseItem';
import './App.css';
import CustomerFormContainer from './component/CustomerFormContainer/CustomerFormContainer';
import Card from './component/card/Card';
import Expenses from './component/expenses/Expenses';
import { useState } from 'react';
import Header from './component/Header/Header';
import TotalBillContainer from './component/TotalBillContaioner/TotalBillContainer';
const CustomerDummyData=[
  {
    Cname:"ashwini",
    bill:100
  },
  {
    Cname:"adam",
    bill:200
  }
]

function App() {
 const [cDataa,setCDataa]= useState([])
  
  const dataHandler=(alldata)=>{
    setCDataa((prevData)=>{
      return[alldata,...prevData]
    })
    
  }
  return (
    <div className="App">
      <header > 
      <Header/>
      <CustomerFormContainer cData={dataHandler}/>
      <Card>
      {/* <ExpenseItem  customerName={CustomerDummyData[0].Cname}/> */}
      <h1>Customer List</h1>
      <Expenses customerData={cDataa}/> 
      <TotalBillContainer billdata={cDataa} />
      </Card>
      </header>
    </div>
  );
}

export default App;
