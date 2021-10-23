import { useState, useEffect } from "react";

import CartProduct from '../components/cartProduct';
import "./styles/pages.scss";

const axios = require("axios");

function Cart() {

    const [cartItems, setCartItems] = useState([]);
    const [total, setTotal] = useState(0);
    let userId = 3;
    const url = 'https://fakestoreapi.com/carts/user/' + userId;
    var sum = 0;

    const getTotal = (quant, price) => {
        sum += quant * price;
        setTotal(sum);
    }

    const showProducts = () => {
        return cartItems.map((item) => {
            return item.products.map((item) => {
                return (
                    <CartProduct
                        id={item.productId}
                        quantity={item.quantity}
                        total={getTotal}
                    />
                );
            })
        })
    }

    const getProducts = async () => {
        const resp = await axios.get(url);
        setCartItems(resp.data);
    }

    useEffect(() => {
        getProducts()
    });

    return (
        <div className="Container">
            <h3>
                Cart
            </h3>
            <div>
                {cartItems && showProducts()}
            </div>
            <div className="Total">
                Total = {total}{"$"}
            </div>
        </div>
    );
}

export default Cart;