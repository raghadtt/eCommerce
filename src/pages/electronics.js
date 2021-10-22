import { useState, useEffect } from 'react';

import axios from 'axios';

import Product from '../components/product';
import "./styles/pages.scss";

function Electronics() {

    const [products, setProducts] = useState([]);

    const url = "https://fakestoreapi.com/products/category/electronics";

    const getProducts = () => {
        axios.get(url)
            .then((response) => {
                const data = response.data;
                setProducts(data);
            })
    }

    const showProducts = () => {
        return products.map((item) => {
            return (
                <Product
                    name={item.title}
                    price={item.price}
                    photo={item.image}
                    id={item.id}
                    category={"electronics"}
                />
            );
        });
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div className="Container">
            <h3>
                Electronics
            </h3>
            <div className="Product">
                {products && showProducts()}
            </div>
        </div>
    );
}

export default Electronics;
