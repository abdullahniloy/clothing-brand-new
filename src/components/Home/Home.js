import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Shirt from '../Shirt/Shirt';
import './Home.css';


const Home = () => {
    const tShirt = useLoaderData();
    const [cart, setCart] = useState([]);



    const handleAddToCart = (shirt) => {
        // console.log(tShirt);
        const exits = cart.find(ts => ts._id === shirt._id);
        if (exits) {
            alert('Shirt Already Added')
        }
        else {
            const newCart = [...cart, shirt];
            setCart(newCart);
            //alert('Successfully Added')
        }

    }
    const handleRemoveItem = (shirt) => {
        const remaining = cart.filter(Ts => Ts._id !== shirt._id);
        setCart(remaining)
    }

    return (

        <div className='home-container'>
            {/* {tShirt.length} */}

            <div className="t-shirtContainer">
                {
                    tShirt.map(shirt => <Shirt
                        key={shirt._id}
                        handleAddToCart={handleAddToCart}
                        shirt={shirt}></Shirt>)

                }
            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}
                    handleRemoveItem={handleRemoveItem}
                ></Cart>
            </div>
        </div>



    );
};

export default Home;