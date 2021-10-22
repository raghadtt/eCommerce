import { Link } from 'react-router-dom';

import "./poster.scss";

function Poster() {
    return (
        <div className="Poster">
            <div className="Poster_content">
                <p>
                    FREE SHIPPING
                    <p>
                        ON ORDERS OVER $50 - USE COUPON CODE OVER50
                    </p>
                </p>
                <Link
                    to="/women"
                    className="PosterButtons">
                    <span>
                        Women
                    </span>
                </Link>
                <Link
                    to="/men"
                    className="PosterButtons">
                    <span>
                        Men
                    </span>
                </Link>
                <Link
                    to="/jewelery"
                    className="PosterButtons">
                    <span>
                        Jewelery
                    </span>
                </Link>
                <Link
                    to="/electronics"
                    className="PosterButtons">
                    <span>
                        Electronics
                    </span>
                </Link>
            </div>
        </div>
    );
}

export default Poster;
