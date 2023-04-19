import axios from "axios";
import ShopApi from "../Api/ShopApi";
import { ActionTypes } from "../constant/ActionTypes";
import { useNavigate, useParams } from "react-router-dom";


export const fetchProducts = () => {

    return async function (dispatch) {
        try {
            const response = await ShopApi.get('/products/')
            dispatch(apiCall(response.data.products))
        }
        catch {
            console.log(Error)
        }
    }
}

export const CategoriesProducts = () => {
    return async function (dispatch) {
        try {
            const response = await ShopApi.get(`/products/categories`)
            dispatch(apiCate(response.data))
        }
        catch {
            console.log(Error)
        }
    }
}

export const SingleCategoriesProducts = (id) => {


    return async function (dispatch) {

        try {
            const response = await ShopApi.get(`/products/category/${id}`)
            console.log(response.data, "doke")
            dispatch(apiSingleCate(response.data))
            // navigate("/categoriesitempage", { state: { id: 1, data: response.data } })
        }
        catch {
            console.log(Error)
        }
    }
}
export const SelectedProducts = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product
    }
}
export const apiCall = (data) => {
    return {
        type: "FETCH_PRODUCT",
        payload: data
    }
}
export const apiCallId = (data) => {
    return {
        type: "SELECTED_PRODUCT",
        payload: data
    }
}

export const apiCate = (data) => {
    return {
        type: "CATEGORIES_PRODUCT",
        payload: data
    }
}

export const apiSingleCate = (data) => {
    console.log(data, "pop")
    return {
        type: "SELECTED_PRODUCT",
        payload: data
    }
}