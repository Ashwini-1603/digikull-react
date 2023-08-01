import React from 'react'
import {
  
    MDBNavbarBrand,
    MDBBtn,
    MDBInputGroup,
    MDBIcon,
  } from "mdb-react-ui-kit";
  import { Link} from "react-router-dom";
  import { useSelector,useDispatch } from "react-redux";
function Banner() {
    const {totalQuantity,cart }=useSelector((state)=>state.allCartData);
  return (
    <div>
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
    </div>
  )
}

export default Banner