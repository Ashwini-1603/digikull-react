import "./Layout.css"
import { Outlet, NavLink } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Mounting</NavLink>
          </li>
          <li>
            <NavLink to="updating">Updating</NavLink>
          </li>
          <li>
            <NavLink to="unmounting">Unmounting</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
};

export default Layout;