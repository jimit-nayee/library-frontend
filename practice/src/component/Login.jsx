import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthComponent/AuthFile';

function Login() {
    const [data, setData] = useState({
        enrollNum: '',
        password: ''
    });
    const auth = useAuth()
    const navigate = useNavigate()

    const formSubmitted = (event) => {
        event.preventDefault();
        axios.post("http://localhost:8080/login", data, {
            headers: {
                "key": "secret"
            }
        })
            .then((res) => {
               
                setData({
                    enrollNum: '',
                    password: ''
                });
                // alert('login successful')
                auth.login(true)
                auth.addRole(res.data)
                navigate('/')
            })
            .catch((err) => {
                console.log(err)
                alert(err)
            })
    }
    const handleInputChange = (event) => {
        setData({ ...data, [event.target.id]: event.target.value });
    };
    return (
        <div>
            <div style={{ backgroundColor: "lightgrey", padding: "40px", height: "100vh", "display": "flex", justifyContent: "center" }}>
                <div className="shadow-lg bg-gray-600 w-1/4 py-10 text-white h-max" style={{ padding: "30px 30px", width: "500px" }}>
                    <label htmlFor="Enrollment" style={{ fontSize: "30px" }}>Login</label>
                    <form className="form flex flex-col mt-7" onSubmit={formSubmitted}>
                        <label htmlFor="Enrollment" style={{ display: "flex" }}>Enrollment Number</label>
                        <input
                            type="text"
                            id="enrollNum"
                            value={data.enrollNum}
                            onChange={handleInputChange}
                            className="shadow appearance-none border  rounded  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        />

                        <label htmlFor="Password" style={{ display: "flex" }}>Password</label>
                        <input
                            type="password"
                            id="password"
                            onChange={handleInputChange}
                            value={data.password}
                            className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        
                        <button className="text-black py-2 px-4 mt-5 rounded-full" style={{ backgroundColor: "white", width: "100px" }}>
                            LOGIN
                        </button>
                        <label style={{ "display": 'flex', "justifyContent": "right" }}><Link to='/register'>Register</Link> </label>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login