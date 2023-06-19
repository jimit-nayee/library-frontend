import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Register() {

    const [data, setData] = useState({
        enrollNum: '',
        name: '',
        role: '',
        number: '',
        address: '',
        department: '',
        password: ''
    });

    const formSubmitted = (event) => {
        event.preventDefault();
        console.log(data)
        axios.post('http://localhost:8080/register', data,{
            headers:{
                "key" : "secret"
            }
        })
            .then((res) => {
                setData(res.data);

                setData({
                    enrollNum: '',
                    name: '',
                    role: '',
                    number: '',
                    address: '',
                    department: '',
                    password: ''
                });
            })
            .catch((err) => {
                console.log(err)
            })

    }
    const handleInputChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    };
    return (
        <div style={{ backgroundColor: "lightgrey", padding: "10px", "display": "flex", justifyContent: "center" }}>
            <div className="shadow-lg bg-gray-700 w-1/4 py-10 text-white h-max mb-5 mt-5" style={{ padding: "30px 30px", width: "500px" }}>
                <label htmlFor="Enrollment" style={{ fontSize: "30px" }}>Register</label>
                <form className="form flex flex-col mt-7" onSubmit={formSubmitted}>

                    <label htmlFor="Enrollment" style={{ display: "flex" }}>Enrollment Number</label>
                    <input
                        type="number"
                        name="enrollNum"
                        value={data.enrollNum}
                        onChange={handleInputChange}
                        className="shadow appearance-none border  rounded  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    />

                    <label htmlFor="Name" style={{ display: "flex" }}>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={data.name}
                        onChange={handleInputChange}
                        className="shadow appearance-none border  rounded  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    />

                    <label htmlFor="department" style={{ display: "flex" }}>Role</label>
                    <select className="shadow appearance-none border  rounded  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" onChange={handleInputChange} name="role">
                        <option selected disabled>Select role</option>
                        <option value="student">Student</option>
                        <option value="admin">Admin</option>
                        {/* <option value="gujarati">Gujarati</option> */}
                    </select>

                    <label htmlFor="mobno" style={{ display: "flex" }}>Phone Number</label>
                    <input
                        type="number"
                        name="number"
                        value={data.number}
                        onChange={handleInputChange}
                        className="shadow appearance-none border  rounded  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <label htmlFor="address" style={{ display: "flex" }}>Address</label>
                    <input
                        type="text"
                        name="address"
                        onChange={handleInputChange}
                        value={data.address}
                        className="shadow appearance-none border  rounded  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <label htmlFor="department" style={{ display: "flex" }}>Department</label>
                    <input
                        type="text"
                        name="department"
                        onChange={handleInputChange}
                        value={data.department}
                        className="shadow appearance-none border  rounded  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <label htmlFor="Password" style={{ display: "flex" }}>Password</label>
                    <input
                        type="password"
                        name="password"
                        onChange={handleInputChange}
                        value={data.password}
                        className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <button className="text-black py-2 px-4 mt-5 rounded-full" style={{ backgroundColor: "white", width: "130px" }}>
                        REGISTER
                    </button>
                    <div style={{ "display": 'flex', "justifyContent": "right" }}><Link to='/login'>  Already have an account?</Link> </div>
                </form>
            </div>
        </div>
    )
}

export default Register