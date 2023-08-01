import { useState } from "react";
 function CunstomerForm(props){
const [bill,setBill]=useState("");
const [cname,setCname]=useState("");
const[experence,setExperence]=useState("")

    const billHandler=(e)=>{
        setBill(e.target.value)
        // console.log(e)
    }
    const  nameHandler=(e)=>{
        setCname(e.target.value)
    }
    const ExperenceHandler=(e)=>{
        setExperence(e.target.value)
    }
    const onSubmitHandler=(event)=>{
        event.preventDefault();
        const InputData={
            bill:bill,
            Cname:cname,
            Experence:experence
        };
        console.log(InputData)
        props.onCustomerData(InputData);
        // setBill("");
        // setCname("");
        // setExperence("")
    }
    return(
        <>
        <form onSubmit={onSubmitHandler}>
           <label>Enter your bill amount</label> 
           <input type="number" required value={bill} onChange={billHandler}/>
            <br/>
            <label>how was the service </label>
            <select onChange={ExperenceHandler}>
            <option value="0" >select</option>
                <option value="20" >excellent</option>
                <option value="10" >Moderate </option>
                <option value="5">bad</option>
            </select>
            <input type="text" value={cname} onChange={nameHandler}/>
            <button type="submit">Add customer</button>
        </form>
        </>
    )
}
export default CunstomerForm;

