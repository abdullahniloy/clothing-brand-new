import React from 'react';
import './Shirt.css'

const Shirt = ({ shirt, handleAddToCart }) => {
    const { picture, price } = shirt;

    return (
        <div className='shirt'>
            <img src={picture} alt="" />
            <h2>Price:{price}</h2>
            <button onClick={() => handleAddToCart(shirt)}>Buy This</button>
        </div>
    );
};

export default Shirt;