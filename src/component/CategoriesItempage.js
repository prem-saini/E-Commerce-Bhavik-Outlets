import React, { useState } from "react"
import { useLocation } from "react-router-dom";
import Header from "./Navbar";
import { Link } from "react-router-dom";

function CategoriesItempage(props) {
    const location = useLocation();
    const [star, setStar] = useState(location.state?.data)

    console.log(location.state?.data, "props")
    // console.log(stat, "love")

    return (
        <> <Header />
            <div className="d-flex justify-content-between flex-wrap p-2">
                {star &&
                    star?.map((value) => {

                        return (
                            <>
                                <div className="Card_main">
                                    <div class="card card_style" style={{ width: "18rem" }}>
                                        <Link to={`/singlepage/${value?.id}`}> <img src={value?.thumbnail
                                        } alt="..." className="card_img" /></Link>
                                        <div class="card-body">
                                            <p className="card-text">{value?.category}</p>
                                            <p class="card-text">{value?.description.substring(0, 50)}</p>
                                            <div className="d-flex justify-content-between">
                                                <p className="card-text">{value?.title}</p>
                                                <p className="card-text">Price:{value?.price}</p></div>
                                            <div className="d-flex justify-content-between">
                                                <p className="card-text">Rating:{value?.rating}</p>
                                                <p className="card-text">Stock: {value?.stock}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>




        </>
    )
}
export default CategoriesItempage