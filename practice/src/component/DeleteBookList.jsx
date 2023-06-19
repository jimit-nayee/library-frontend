import React, { useEffect, useState } from 'react';
import Product from './DeleteBookCard';
import axios from 'axios';

function BookList() {
    const [products, setProducts] = useState([]);
    const [updated, setUpdated] = useState(false);

    useEffect(() => {
        axios
            .get("http://localhost:8080/getBookData", {
                headers: {
                    "key": "secret"
                }
            })
            .then((res) => {
                setProducts(res.data);
            })
            .catch((err) => {
                alert(err);
            });
    }, [updated]);

    const handleDeleteBook = (id) => {
        axios
            .delete(`http://localhost:8080/deleteBook/${id}`,  {
                headers: {
                    "key": "secret"
                }
            })
            .then(() => {
                if (updated === true) {
                    setUpdated(false)
                }
                else {
                    setUpdated(true)
                }
            })
            .catch((err) => {
                alert(err);
            });
    };
    return (
        <div>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'start', width: 'max-content' }}>
                    {products.map((product) => (
                        <Product
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            author={product.authorName}
                            img={product.bookImg}
                            type={product.type}
                            language={product.language}
                            price={product.price}
                            onDelete={() => handleDeleteBook(product.id)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default BookList;
