import React from "react";
import { addToCart } from "../../Features/CartSlice";
import "./ProductCart.css"
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import { useSelector,useDispatch } from "react-redux";
function ProductCart() {
  const itemss = useSelector((state) => state.allCartData.items);
  const dispatch=useDispatch();

  return (
    <div>
      {/* <MDBContainer>
        <MDBRow className="mb-3">
          {itemss.map((item) => (
            <MDBCol size="3"  className="p-3" key={item.id}>
              <MDBCard>
                <MDBCardImage
                  src={item.img}
                  position="top"
                  alt="..."
                />
                <MDBCardBody>
                  <MDBCardTitle>{item.title}</MDBCardTitle>
                  <MDBCardText>
                  {item.price}
                  </MDBCardText>
                  <MDBBtn href="#" onClick={()=>dispatch(addToCart(item))}>Add to cart</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer> */}


      <div className="main-product-container">
        <h1>Menu</h1>
        {
          itemss.map((item)=>(
            <div  className="items-container" key={item.id}>
              <img src={item.img} style={{width:"100px"}}/>
              <div>
                <p>{item.title}</p>
                <p>{item.price}</p>
                <button onClick={()=>dispatch(addToCart(item))}>add</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default ProductCart;
