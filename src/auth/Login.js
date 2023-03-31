import React, { useState } from 'react'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import "./Login.css"
const Login = () => {

    const [passShow, setPassShow] = useState(false);
    const [inpval, setInpval] = useState({
        email: "",
        password: "",
    });

    const setVal = (e) => {

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
            <div>
                <Helmet>
                    <title>MY LOGIN PAGE || Bhavik Outlets</title>
                    <meta name="description" content="My Page Description" />
                    <meta name="keywords" content="My, Page, Keywords" />
                </Helmet>

            </div>
            <section>
                <div className="form_data">
                    <div className="form_heading">
                        <h1>Log In</h1>

                    </div>

                    <form>
                        <div className="form_input">
                            <label>Email</label>
                            <input type="email" value={inpval.email} onChange={setVal} name="email" id="email" placeholder='Enter Your Email Address' />
                        </div>
                        <div className="form_input">
                            <label>Password</label>
                            <div className="two">
                                <input type={!passShow ? "password" : "text"} onChange={setVal} value={inpval.password} name="password" id="password" placeholder='Enter Your password' />
                                <div className="showpass" onClick={() => setPassShow(!passShow)}>
                                    {!passShow ? "Show" : "Hide"}
                                </div>
                            </div>
                        </div>

                        <button className='btn_login'>Login</button>
                        <p>Don't have an Account? <Link to="/signup">Sign Up </Link> </p>

                    </form>

                </div>
            </section>
        </>
    )
}

export default Login


