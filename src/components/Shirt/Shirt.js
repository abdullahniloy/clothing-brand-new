import React from 'react';
import './Shirt.css'

const Shirt = ({ shirt }) => {
    const { picture, price } = shirt;

    return (
        <div className='shirt'>
            <img src={picture} alt="" />
            <h2>Price:{price}</h2>
            <button>Buy This</button>
        </div>
    );
};

export default Shirt;