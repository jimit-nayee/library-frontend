import React, { useEffect, useState } from 'react'
import axios from 'axios';
import BuyBookCard from './BuyBookCard';

function BuyBookList({addToCart}) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8080/getBookData",{
                headers:{
                    "key" : "secret"
                }
            })
            .then((res) => {
                setProducts(res.data);
            })
            .catch((err) => {
                alert(err);
            });
    }, []);
    return (
        <div>
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'start',
                        width: 'max-content',
                    }}
                >
                    {products.map((product) => (
                        <BuyBookCard
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            author={product.authorName}
                            img={product.bookImg}
                            type={product.type}
                            language={product.language}
                            price={product.price}
                            addToCart = {addToCart}
                        />
                    ))}
                </div>
            </div>
        </div>)
}

export default BuyBookList