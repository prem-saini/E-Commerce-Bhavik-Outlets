import axios from "axios";
import ShopApi from "../Api/ShopApi";
import { ActionTypes } from "../constant/ActionTypes";


export const fetchProducts = () => {

    return async function (dispatch) {
        try {
            const response = await ShopApi.get('/products/')
            // console.log(response.data, "dok")
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
            console.log(response.data, "dok")
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
            const response = await ShopApi.get(`/products/categories/${id}`)
            console.log(response.data, "doke")
            dispatch(apiSingleCate(response.data))

        }

        catch {
            console.log(Error)
        }

    }


}

export const apiCall = (data) => {
    return {
        type: "FETCH_PRODUCT",
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
    return {
        type: "SINGLE_CATEGORIES_PRODUCT",
        payload: data
    }
}