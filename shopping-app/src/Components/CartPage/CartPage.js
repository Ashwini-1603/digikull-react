import React, { useEffect } from "react";
import "./CartPage.css";
import { useSelector, useDispatch } from "react-redux";
import {
  getCartTotal,
  removeItem,
  increaseItemQuantity,
  decreaseItemQuantity,
} from "../../Features/CartSlice";
function CartPage() {
  const { cart, totalPrice, totalQuantity } = useSelector(
    (state) => state.allCartData
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);
  function Onderplaced() {
    if (totalQuantity > 0) {
      alert("your order is placed");
    } else {
      alert("add some item in cart");
    }
  }

  //to calculate the total amount
  const cartTotal = cart
    .map((item) => item.price * item.quantity)
    .reduce((prevValue, currValue) => prevValue + currValue, 0);

  return (
    <div >
      <section className="h-100 gradient-custom">
        <div className="container py-5">
          <div className="row d-flex justify-content-center my-4">
            <div className="col-md-8">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Cart - page</h5>
                </div>
                <div className="card-body">
                  {/* <!-- Single item --> */}
                  {cart.map((data,i) => {
                    //calculate the price of per item on basis of quantity
                    const itemTotal = data.price * data.quantity;

                    return (
                      <div className="row" key={i}>
                        <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                          {/* <!-- Image --> */}
                          <div
                            className="bg-image hover-overlay hover-zoom ripple rounded"
                            data-mdb-ripple-color="light"
                          >
                            <img
                              src={data.img}
                              className="w-100"
                              alt="Blue Jeans Jacket"
                            />
                            <a href="#!">
                              <div className="mask"></div>
                            </a>
                          </div>
                          {/* <!-- Image --> */}
                        </div>

                        <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                          {/* <!-- Data --> */}
                          <p>
                            <strong>{data.title}</strong>
                          </p>
                          <p>{itemTotal}</p>

                          <button
                            type="button"
                            className="btn btn-primary btn-sm me-1 mb-2"
                            data-mdb-toggle="tooltip"
                            title="Remove item"
                            onClick={() => dispatch(removeItem(data))}
                          >
                            <i className="fas fa-trash"></i>
                          </button>
                          <button
                            type="button"
                            className="btn btn-danger btn-sm mb-2"
                            data-mdb-toggle="tooltip"
                            title="Move to the wish list"
                          >
                            <i className="fas fa-heart"></i>
                          </button>
                          {/* <!-- Data --> */}
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                          {/* <!-- Quantity --> */}
                          <div className="d-flex mb-4">
                            <button
                              className="btn btn-primary px-3 me-2"
                              onClick={() =>
                                dispatch(decreaseItemQuantity(data))
                              }
                            >
                              <i className="fas fa-minus"></i>
                            </button>

                            <div className="form-outline">
                              <input
                                id="form1"
                                min="0"
                                name="quantity"
                                value={data.quantity}
                                type="number"
                                className="form-control"
                                onChange={() => null}
                              />
                            </div>

                            <button
                              className="btn btn-primary px-3 ms-2"
                              onClick={() =>
                                dispatch(increaseItemQuantity(data))
                              }
                            >
                              <i className="fas fa-plus"></i>
                            </button>
                          </div>
                          {/* <!-- Quantity --> */}
                        </div>
                        <hr className="my-4" />
                      </div>
                    );
                  })}
                  {/* <!-- Single item --> */}
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Summary</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      totalQuantity
                      <span>{totalQuantity}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                      totalPrice
                      <span>{cartTotal}</span>
                    </li>
                  </ul>

                  <button
                    type="button"
                    className="btn btn-primary btn-lg btn-block"
                    onClick={() => Onderplaced()}
                  >
                    Go to checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CartPage;
