import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Shop.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch("products.json")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);
    useEffect(() => {
        const storedCart = getShoppingCart();
        for (const id in storedCart) {
            const addedProduct = products.find((product) => product.id === id);
            //  add quantity
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            console.log(addedProduct);
        }
    }, [products]);

    const AddProductToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
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
                        {/* kal friday, InshaAllah All Kaj Compelete Korbo.... */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;
