import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
    let total = 0;
    let shipping = 0;
    let tax = 0;
    let grandTotal = 0;
    for (const product of cart) {
        total = total + product.price;
        shipping = shipping + product.shipping;
        tax = (total * 7) / 100;
        grandTotal = total + shipping + tax;
    }
    return (
        <div className="summary">
            <h2>Order Summary</h2>
            <ul>
                <li>Selected Items: {cart.length}</li>
                <li>Total Price: ${total}</li>
                <li>Total Shipping Charge: ${shipping}</li>
                <li>Tax: ${tax} </li>
            </ul>
            <h3>Grand Total: ${grandTotal} </h3>
            <button className="btn btn-danger w-100 mt-5">Clear Cart</button>
            <button className="btn btn-primary w-100 mt-2">Review Order</button>
        </div>
    );
};

export default Cart;
