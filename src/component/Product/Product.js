// import React, { useState } from 'react';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'


// import { useEffect } from "react";




//const Product = () => {
const Product = ({ product, handleAddToCart }) => {

    //  const { product, handleAddToCart } = product;
    // console.log(props.product);
    // console.log(props);
    // const [product, setProduct] = useState({})

    // useEffect(() => {
    // const { seller, price, ratings, img } = props?.product
    //  setProduct(props.product)
    //  }, [props])

    //  console.log(product)

    // if (product) {

    if (product) {

        const { name, seller, price, ratings, img } = product;
        // console.log(product)

        // onClick={() => product.handleAddToCart(product)} 
        return (
            <div className='product'>
                {/* <img src={product.img} alt=""></img> */}
                <img src={img} alt=""></img>

                <div className='product-info'>
                    {/* <h2>{product.name}</h2> */}
                    <h5>{name}</h5>

                    {/* <h3>Price: {product.price}</h3> <br /> <br /> */}
                    <h5>$Price: {price}</h5>
                    {/* <h4>Seller: {product.seller}</h4> */}
                    <h5>Seller: {seller}</h5>
                    {/* <h4>Ratting: {product.ratings}</h4> */}
                    <h5>Ratting: {ratings} </h5>

                </div>

                <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                    <p className='btn-text'>Add to Cart</p>
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>

                </button>
                {/* 
                <div>
                    <hr />

                </div> */}
            </div>


        );
    }
    // else {

    //     return (
    //         <div>
    //             <h1>Wating...</h1>
    //         </div>
    //     )
    // }



};

export default Product;