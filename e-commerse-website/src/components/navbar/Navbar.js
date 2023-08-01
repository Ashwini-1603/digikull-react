import "./Navbar.css";
import { useSelector} from "react-redux";
export default function Navbar() {
    const count= useSelector(state=>state.counter.value);
  return (
    <div className="navbar-container">
      <h1>inside nav bar</h1>
      <div className="card-container">
        <h1>cart </h1>
        <h1>{ count }</h1>
      </div>
    </div>
  );
}
