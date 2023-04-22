import React from "react"
import './CateItem.css'
import { Helmet } from "react-helmet";
import { useSelector, useDispatch } from "react-redux";
// import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { ADD } from "../actions/Action";

function CategoriesItempage(props) {

    // const location = useLocation();
    const stare = useSelector(state => state.app)
    // console.log(stare, "opp")
    // const [star, setStar] = useState(location.state?.data)
    // console.log(star, "sta")
    const dispatch = useDispatch()

    const senddata = (val) => {


        toast.success("Your item Add Successfully !", {
            position: toast.POSITION.TOP_LEFT,
            autoClose: 2000,

        });
        setTimeout(() => {

        }, 2000);
        dispatch(ADD(val))
    }

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
                                <div className="Card_main ho">
                                    <div class="card card_style1">
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

                                            <button className="btn_addItem" onClick={() => senddata(value)}>ADD ITEM</button>
                                        </div>


                                    </div>
                                </div>
                                <ToastContainer />
                            </>
                        )
                    })
                }
            </div>






        </>
    )
}
export default CategoriesItempage