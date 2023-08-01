import React,{useEffect} from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn,
  MDBInputGroup,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Link ,Outlet} from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import {getCartTotal} from "../../Features/CartSlice";
import "./Navbar.css"
function Navbar() {

  const {totalQuantity,cart }=useSelector((state)=>state.allCartData);
  const dispatch=useDispatch();
useEffect(()=>{dispatch(getCartTotal())},[cart])

  return (
    <div className="navbR-container">
      <MDBNavbar light bgColor=" dark">
        <MDBContainer fluid>
          <MDBNavbarBrand> <h3>Thali-App</h3></MDBNavbarBrand>
          <MDBInputGroup tag="form" className="d-flex w-auto mb-3">
            <MDBNavbarBrand>

              <Link to="/"><span>Menu</span></Link>
            </MDBNavbarBrand>
            <MDBBtn outline>
              <MDBIcon fas icon="shopping-cart" />
              <Link to="/cart"> cart({totalQuantity})</Link>
             
            </MDBBtn>
          </MDBInputGroup>
        </MDBContainer>
      </MDBNavbar>
      <Outlet />
    </div>
  );
}

export default Navbar;
