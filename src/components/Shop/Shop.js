import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Shop.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch("products.json")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    const AddProductToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
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
                        <Cart cart={cart}></Cart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;
