import ExpenseItem from "../ExpenseItem/ExpenseItem";
import CustomerFormContainer from "../CustomerFormContainer/CustomerFormContainer";
export default function Expenses(props){
//  console.log( props.customerData);
    return(
        <>
         {props.customerData.map((item,i)=> <ExpenseItem key={i} namee={item.Cname} bill={item.bill} expences={item.Experence}/>)}
        </>
    )
}