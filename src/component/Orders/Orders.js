import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewIteam from '../ReviewIteam/ReviewIteam';

import { Link } from 'react-router-dom'


const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);

    const handleRemoveProduct = product => {
        const rest = cart.filter(pd => pd.id !== product.id);
        setCart(rest);
        removeFromDb(product.id)
    }
    return (
        <div>
            <div className="shop-container">
                <div className="review-items-container">
                    {
                        cart.map(product => <ReviewIteam
                            key={product.id}
                            product={product}
                            handleRemoveProduct={handleRemoveProduct}
                        ></ReviewIteam>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}></Cart>
                    <Link to="/Inventory">

                        <button>Proceed Checkout</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Orders;