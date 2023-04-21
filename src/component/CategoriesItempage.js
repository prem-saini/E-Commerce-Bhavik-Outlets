import React from "react"
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
// import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function CategoriesItempage(props) {

    // const location = useLocation();
    const stare = useSelector(state => state.app)
    console.log(stare, "opp")
    // const [star, setStar] = useState(location.state?.data)
    // console.log(star, "sta")


    return (
        <>
            <div>
                <Helmet>
                    <title>MY CATEGORIES PAGE || Bhavik Outlets</title>
                    <meta name="description" content="My Page Description" />
                    <meta name="keywords" content="My, Page, Keywords" />
                </Helmet>

            </div>
            <div className="d-flex justify-content-between flex-wrap p-2">
                {stare?.products?.products
                    &&
                    stare?.products?.products.map((value) => {
                        return (
                            <>
                                <div className="Card_main">
                                    <div class="card card_style1" style={{ width: "18rem" }}>
                                        <Link to={`/singlepage/${value?.id}`} state={value}> <img src={value?.thumbnail
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