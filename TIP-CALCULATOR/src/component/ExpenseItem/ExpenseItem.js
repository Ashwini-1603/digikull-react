import Card from "../card/Card";
import "./ExpenseIntem.css";
export default function ExpenseItem(props){
    var totaltip=0;
    // alert(props.bill)
     function calculationTip()
     {
         totaltip=(Number(props.expences)%Number(props.bill));
          console.log("bill is"+totaltip)
     }
     calculationTip()
    return(
        <Card >
        <h2 className="Clist">{props.namee } is offering a tip of {totaltip} rupee</h2>
        </Card>
    )
}