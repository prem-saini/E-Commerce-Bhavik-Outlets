import React from "react"
import Header from "../component/Navbar"
import "./Forgot.css"

function Forgotpass() {
    return (
        <>
            <Header />

            <section>
                <div className="form_data">
                    <div className="form_heading">
                        <h1>Reset Password</h1>

                    </div>

                    <form>
                        <div className="form_input">
                            <label>Email</label>
                            <input type="email" value={inpval.email} onChange={setVal} name="email" id="email" placeholder='Enter Your Email Address' />
                        </div>


                        <button className='btn'>Reset Password</button>


                    </form>

                </div>
            </section>



        </>
    )
}

export default Forgotpass