import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
    let total = 0;
    let shipping = 0;
    let tax = 0;
    let grandTotal = 0;
    let quantity = 0;
    for (const product of cart) {
        if (product.quantity === 0) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping * product.quantity;
        quantity = quantity + product.quantity;
        tax = (total * 7) / 100;
        grandTotal = total + shipping + tax;
    }
    return (
        <div className="summary">
            <h2>Order Summary</h2>
            <ul>
                <li>Selected Items: {quantity}</li>
                <li>Total Price: ${total}</li>
                <li>Total Shipping Charge: ${shipping}</li>
                <li>Tax: ${tax.toFixed(2)} </li>
            </ul>
            <h3>Grand Total: ${grandTotal.toFixed(2)} </h3>
            <button className="btn btn-danger w-100 mt-5">Clear Cart</button>
            <button className="btn btn-primary w-100 mt-2">Review Order</button>
        </div>
    );
};

export default Cart;
