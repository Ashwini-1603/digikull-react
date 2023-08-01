import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { add, sub } from "../../slice/CounterSlice";
import axios from "axios";
import Card from "../card/Card";
import "./Main.css";
export default function MainPage() {
  const [dataTable, setDataTable] = useState([]);
  let [items, setItems] = useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setDataTable(res.data.products));
  }, []);

  return (
    <div>
      {dataTable.map((item, i) => (
        <div >
          <Card item={item} key={i} />
        </div>
      ))}
    </div>
  );
}
