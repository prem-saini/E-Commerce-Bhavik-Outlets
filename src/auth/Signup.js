import React, { useState } from "react"
import { Link } from "react-router-dom";
import Header from "../component/Navbar";
import "./Login.css"

function Signup() {
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
                        <h1>Sign Up</h1>

                    </div>

                    <form>
                        <div className="form_input">
                            <label>Name</label>
                            <input type="email" value={inpval.email} onChange={setVal} name="email" id="email" placeholder='Enter Your Name' />
                        </div>
                        <div className="form_input">
                            <label>Email</label>
                            <input type="email" value={inpval.email} onChange={setVal} name="email" id="email" placeholder='Enter Your Email Address' />
                        </div>
                        <div className="form_input">
                            <label>Password</label>
                            <input type="email" value={inpval.email} onChange={setVal} name="email" id="email" placeholder='Enter Your Email Password' />
                        </div>
                        <div className="form_input">
                            <label>Confirm Password</label>
                            <div className="two">
                                <input type={!passShow ? "password" : "text"} onChange={setVal} value={inpval.password} name="password" id="password" placeholder='Enter Your confirm password' />
                                <div className="showpass" onClick={() => setPassShow(!passShow)}>
                                    {!passShow ? "Show" : "Hide"}
                                </div>
                            </div>
                        </div>

                        <button className='btn' >Sign Up</button>
                        <p>Don't have an Account?<Link to='/login'> Login </Link> </p>

                    </form>

                </div>
            </section>



        </>
    )
}

export default Signup