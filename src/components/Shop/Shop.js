import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Shop.css";
import Product from "../Product/Product";

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("products.json")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    const AddProductToCart = (product) => {
        console.log(product);
    };
    return (
        <div className="shop">
            <div className="container">
                <div className="row">
                    <div className="col-lg-9">
                        <div className="products mt-4">
                            <div className="row">
                                {products.map((product) => (
                                    <Product key={product.id} product={product} AddProductToCart={AddProductToCart}></Product>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="summary">
                            <h2>Order Summary</h2>
                            <ul>
                                <li>Selected Items: </li>
                                <li>Total Price: </li>
                                <li>Total Shipping Charge: </li>
                                <li>Tax: $12</li>
                            </ul>
                            <h3>Grand Total: $12</h3>
                            <button className="btn btn-danger w-100 mt-5">Clear Cart</button>
                            <button className="btn btn-primary w-100 mt-2">Review Order</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;
