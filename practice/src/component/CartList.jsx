import React, { useEffect, useState } from 'react'
import axios from 'axios';
import CartBookCard from './CartBookCard';

function CartList({ cart }) {
    const [products, setProducts] = useState([]);
    const [id, setId] = useState(null);

    useEffect(() => {
        if (id) {
            axios
                .get(`http://localhost:8080/getBook/${id}`,{
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
        }
    }, [id]);

    return (
        <div>
            <div
                style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'start', width: 'max-content' }}>
                    {Array.from(cart).map((product) => {

                        return (
                        <CartBookCard
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            author={product.author}
                            img={product.img}
                            type={product.type}
                            language={product.language}
                            price={product.price}
                        />)
                    })}
                </div>
            </div>
        </div>
    )
}

export default CartList