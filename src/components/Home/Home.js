import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Shirt from '../Shirt/Shirt';
import './Home.css';







const Home = () => {
    const tShirt = useLoaderData();


    return (

        <div className='home-container'>
            {/* {tShirt.length} */}


            <div className="t-shirtContainer">
                {
                    tShirt.map(shirt => <Shirt
                        key={shirt._id}
                        shirt={shirt}></Shirt>)

                }
            </div>
            <div className="cart-container">
                <Cart></Cart>
            </div>
        </div>



    );
};

export default Home;