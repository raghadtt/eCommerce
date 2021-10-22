import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import './header.scss';

function Header() {
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
                <span >
                    Men
                </span>
            </Link>
            <Link
                to="/women"
                className="HeaderPages">
                <span >
                    Women
                </span>
            </Link>
            <Link
                to="/electronics"
                className="HeaderPages">
                <span >
                    Electronics
                </span>
            </Link>
            <Link
                to="/jewelery"
                className="HeaderPages">
                <span >
                    Jewelery
                </span>
            </Link>
            <Link
                to="/cart"
                className="CartIcon">
                <span >
                    <FaShoppingCart />
                </span>
            </Link>
        </div >
    );
}

export default Header;
