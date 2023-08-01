import TotalCustomerBill from "../TotalCustomerBill/TotalCustomerBill";
function TotalBillContainer(props){
    
    return(
        <>
        <TotalCustomerBill tBill={props.billdata}/>
        </>
    )
}
export default TotalBillContainer;