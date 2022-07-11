import React, { useEffect, useState } from 'react';
//import { addToDb } from '../../utilities/fakedb';
import Cart from '../../Cart/Cart';

import Product from '../../Product/Product';
import './Shop.css'
import { addToDb, getStoredCart } from '../../../utilities/fakedb';
import useProducts from '../../../hooks/useProducts';
//import { faOtter } from '@fortawesome/free-solid-svg-icons';

const Shop = () => {
    console.log('products load before fetch  ')
    const [products, setProducts] = useProducts([]);

    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = getStoredCart();
        console.log(storedCart)
    }, [])

    const handleAddToCart = (selectedProduct) => {
        // console.log(selectedProduct);
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists]
        }
        //do not do this: cart.push(product);
        // const newCart = [...cart, selectedProduct];
        setCart(newCart);
        addToDb(selectedProduct.id);

    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {/* <h3>This is for products: {products.length}</h3> */}
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}>


                    </Product>)
                }
            </div>


            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;