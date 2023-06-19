import axios from 'axios';
import React, { useState } from 'react'

function AddBook() {
    const [file, setFile] = useState(null);
    const [data, setData] = useState({
        id: '',
        name: '',
        authorName: '',
        type: '',
        language: '',
        price: '',
        bookImg: ''
    });

    const formSubmitted = (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('id', data.id);
        formData.append('name', data.name);
        formData.append('authorName', data.authorName);
        formData.append('type', data.type);
        formData.append('language', data.language);
        formData.append('price', data.price);
        formData.append('bookImg', file);

        axios.post('http://localhost:8080/saveImg', formData,{
            headers:{
                "key" : "secret"
            }
        })
            .then((res) => {
                setData(res.data);
                setData({
                    id: '',
                    name: '',
                    authorName: '',
                    type: '',
                    language: '',
                    price: '',
                    bookImg: ''
                });
                alert("Book added Successfully");
            })
            .catch((err) => {
                console.log(err);
                alert(err);
            });
    };

    const handleInputChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
    };

    return (
        <div style={{ backgroundColor: "lightgrey", padding: "10px", "display": "flex", justifyContent: "center" }}>
            <div className="shadow-lg bg-gray-700 w-1/4 py-10 text-white h-max mb-5 mt-5" style={{ padding: "30px 30px", width: "500px" }}>
                <label htmlFor="Enrollment" style={{ fontSize: "30px" }}>ADD BOOK</label>
                <form className="form flex flex-col mt-7" onSubmit={formSubmitted}>

                    <label htmlFor="id" style={{ display: "flex" }}>Book ID</label>
                    <input
                        type="number"
                        name="id"
                        value={data.id}
                        onChange={handleInputChange}
                        className="shadow appearance-none border  rounded  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-mobnooutline"
                    />

                    <label htmlFor="Name" style={{ display: "flex" }}>Book Name</label>
                    <input
                        type="text"
                        name="name"
                        value={data.name}
                        onChange={handleInputChange}
                        className="shadow appearance-none border  rounded  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    />

                    <label htmlFor="" style={{ display: "flex" }}>Author Name</label>
                    <input
                        type="text"
                        name="authorName"
                        value={data.authorName}
                        onChange={handleInputChange}
                        className="shadow appearance-none border  rounded  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    />

                    <label htmlFor="type" style={{ display: "flex" }}>Book Type</label>
                    <select className="shadow appearance-none border  rounded  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" onChange={handleInputChange} name="type">
                        <option selected disabled >Select Book Type</option>
                        <option value="comedy">Comedy</option>
                        <option value="love_story">Love Story</option>
                        <option value="horror">Horror</option>
                        <option value="history">History</option>
                        <option value="ritual">Ritual</option>
                        <option value="knowledge">Knowledge</option>
                    </select>

                    <label htmlFor="department" style={{ display: "flex" }}>Language</label>
                    <select className="shadow appearance-none border  rounded  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" onChange={handleInputChange} name="language">
                        <option selected disabled>Select language</option>
                        <option value="hindi">Hindi</option>
                        <option value="english">English</option>
                        <option value="gujarati">Gujarati</option>
                    </select>

                    <label htmlFor="price" style={{ display: "flex" }} >Price</label>
                    <input
                        type="number"
                        name="price"
                        onChange={handleInputChange}
                        value={data.price}
                        className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    />

                    <label style={{ display: "flex" }}>Upload Image </label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        name="bookImg"
                    />

                    <button className="text-black py-2 px-4 mt-5 rounded-full" style={{ backgroundColor: "white", width: "130px" }}>
                        ADD BOOK
                    </button>
                </form>
            </div>
        </div >
    )
}

export default AddBook