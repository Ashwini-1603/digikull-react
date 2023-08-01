import React from "react";
import { addToCart } from "../../Features/CartSlice";
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
      <MDBContainer>
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
      </MDBContainer>
    </div>
  );
}

export default ProductCart;
