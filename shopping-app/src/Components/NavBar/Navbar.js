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
function Navbar() {

  const {totalQuantity,cart }=useSelector((state)=>state.allCartData);
  const dispatch=useDispatch();
useEffect(()=>{dispatch(getCartTotal())},[cart])

  return (
    <div>
      <MDBNavbar light bgColor="light">
        <MDBContainer fluid>
          <MDBNavbarBrand> <h3>ShoppingHub</h3></MDBNavbarBrand>
          <MDBInputGroup tag="form" className="d-flex w-auto mb-3">
            <MDBNavbarBrand>
            
              <Link to="/"><span>All Products</span></Link>
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
