import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemoveItem }) => {
    let message;
    if (cart.length === 0) {
        message = <p> Please Buy Items!!</p>
    }
    else if (cart.length === 1) {
        message = <div>
            <h2>AMr jonno 1ta</h2>
            <h2>Tmr jonno 1ta</h2>
            <h2>Tar jonno 1ta</h2>
        </div>

    }
    else {
        message = <p>Thanks For Buying!!</p>
    }
    return (
        <div>
            <h1 className={cart.length === 2 ? `orange` : 'pink'}>Order History:</h1>
            <p className={`bold ${cart.length === 2 ? 'yellow' : 'red'}`}>Cart Length:{cart.length}</p>
            {
                cart.map(tshirt => <p
                    key={tshirt._id}
                >
                    {tshirt.name}
                    <button onClick={() => handleRemoveItem(tshirt)}>X</button>

                </p>)


            }

            {
                message
            }
            {
                cart.length === 3 ? <p>Tin jon paise</p> : <p> Hudai Hudai</p>
            }
            <p>and operator</p>
            {cart.length === 2 && <h2>Double Items</h2>}

            <p> or operator</p>
            {cart.length === 4 || <p>4 ta item na</p>}
        </div>
    );
};

export default Cart;

/* Conditional Rendering
1. use element in variable and then use if-else to set value
2. ternary operator  (if condition is true , i want to display something)
        conditon ? true : False
3. && operator.
4. || operator (if condition is false , i want to display something)
*/