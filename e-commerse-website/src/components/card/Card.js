import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, sub } from "../../slice/CounterSlice";
export default function Card({ item },props) {
  let [itemsTotal, setItemsTotal] = useState(0);
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const[itemss,setItemss]=useState([item])
  const { title, images, id } = item;
//   console.log("indider cardt ",item)
  function AddHandler() {
    setItemsTotal((itemsTotal += 1));
    dispatch(add());
    setItemss(item);
    console.log("items is",item.id)
  }
  function removeHandler() {
    if (itemsTotal > 0) {
      setItemsTotal((itemsTotal -= 1));
      dispatch(sub());
    }
  }
  return (
    <div >
      <h1>{title} </h1>
      <div >
        <div >
        <img src={item.thumbnail} style={{ width: "100px" }} />
          <div> 
            <span>{itemsTotal}</span>
            <button onClick={() => AddHandler()}>+</button>
            <button onClick={() => removeHandler()}>-</button>
          
          </div>
        </div>
      </div>
    </div>
  );
}
