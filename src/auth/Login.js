
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Header from '../component/Navbar';
// import { NavLink, useNavigate } from "react-router-dom"
// import { ToastContainer, toast } from 'react-toastify';
import "./Login.css"


const Login = () => {

    const [passShow, setPassShow] = useState(false);

    const [inpval, setInpval] = useState({
        email: "",
        password: "",
    });

    // const navigate = useNavigate();

    const setVal = (e) => {
        // console.log(e.target.value);
        const { name, value } = e.target;

        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })
    };




    return (
        <>
            <Header />
            <section>
                <div className="form_data">
                    <div className="form_heading">
                        <h1>Log In</h1>

                    </div>

                    <form>
                        <div className="form_input">
                            <label htmlFor="email">Email</label>
                            <input type="email" value={inpval.email} onChange={setVal} name="email" id="email" placeholder='Enter Your Email Address' />
                        </div>
                        <div className="form_input">
                            <label htmlFor="password">Password</label>
                            <div className="two">
                                <input type={!passShow ? "password" : "text"} onChange={setVal} value={inpval.password} name="password" id="password" placeholder='Enter Your password' />
                                <div className="showpass" onClick={() => setPassShow(!passShow)}>
                                    {!passShow ? "Show" : "Hide"}
                                </div>
                            </div>
                        </div>

                        <button className='btn'>Login</button>
                        <p>Don't have an Account? <Link to="/signup">Sign Up </Link> </p>
                        {/* <ToastContainer /> */}
                    </form>

                </div>
            </section>
        </>
    )
}

export default Login


