import CunstomerForm from "../CustomerForm/CustomerForm"
 function CustomerFormContainer(props){
const customerDataHandler=(allData)=>{
    const customerData={
        ...allData
    }
    // console.log(""+customerData.bill)
props.cData(customerData)
}
    return(
        <>
        <CunstomerForm onCustomerData={customerDataHandler}/>
        </>
    )
}
export default CustomerFormContainer;