import { useState, useEffect } from 'react';

import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import Popup from '../popup';
import './header.scss';

const axios = require("axios");

function Header() {

    const userId = 3;
    const url = 'https://fakestoreapi.com/carts/user/' + userId;
    const [cartItems, setCartItems] = useState([]);
    var sum = 0;

    const sumCart = () => {
        return cartItems.map((item) => {
            sum = sum + item.products.length;
            return;
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
        <div className="Header">
            <Link to="/eCommerce">
                <button className="LogoButton">
                    N O U S
                </button>
            </Link>
            <Link
                to="/contact"
                className="HeaderPages">
                <span>
                    Contact
                </span>
            </Link>
            <Link
                to="/about"
                className="HeaderPages">
                <span>
                    About
                </span>
            </Link>
            <Link
                to="/men"
                className="HeaderPages">
                <span>
                    Men
                </span>
            </Link>
            <Link
                to="/women"
                className="HeaderPages">
                <span>
                    Women
                </span>
            </Link>
            <Link
                to="/electronics"
                className="HeaderPages">
                <span>
                    Electronics
                </span>
            </Link>
            <Link
                to="/jewelery"
                className="HeaderPages">
                <span>
                    Jewelery
                </span>
            </Link>
            <Link
                to="/login"
                className="Login">
                <span>
                    Login
                </span>
            </Link>
            <Link
                to="/cart"
                className="CartIcon">
                <span>
                    <FaShoppingCart />
                </span>
                <span className="Badge">
                    {sumCart() && sum}
                </span>
            </Link>
        </div >
    );
}

export default Header;
