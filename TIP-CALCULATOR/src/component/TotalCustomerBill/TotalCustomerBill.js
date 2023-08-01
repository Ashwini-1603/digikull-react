import "./TotalCustomerBill.css"
function TotalCustomerBill(props){
    console.log(props.tBill);
    let totalTip=0;
    let totalCustomer=0;
    props.tBill.map((item,i)=>{  
        // let per=(Number(item.Experence)/Number(item.bill))*100;
        let per=Number(item.Experence)%Number(item.bill);
        totalTip+=per;
        // console.log("value of per"+totalTip)
        totalCustomer=Number(i+1);
    })
    console.log("t"+totalTip)
    return (
        <>
        <h3><span className="head-tip">calculate tip and Customer</span></h3>
        <div className="bill-content">
            <div className="main" >
                <h2>total customer</h2>
                <h3>{totalCustomer}</h3>
            </div>
            <div className="main">
                <h2>total Tip</h2>
                <h3>{totalTip}</h3>
            </div>
        </div>
        </>
    )
}
export default TotalCustomerBill;