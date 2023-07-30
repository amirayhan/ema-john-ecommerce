import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Product = (props) => {
    const { img, name, price, seller, ratings } = props.product;
    const AddProductToCart = props.AddProductToCart;
    return (
        <div className="col-lg-4">
            <Card className="product mb-3" style={{ width: "18rem" }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <h5>Price: ${price}</h5>
                    <h6>Brand: {seller}</h6>
                    <p>
                        <small>Ratings: {ratings} Stars</small>
                    </p>
                    <Button onClick={() => AddProductToCart(props.product)} variant="warning" style={{ width: "100%" }}>
                        Add to Cart
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Product;
