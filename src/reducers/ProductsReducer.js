const intialState = {
    products: [],
}

export const productsReducer = (state = intialState, action) => {

    switch (action.type) {
        case "FETCH_PRODUCT":
            return { ...state, products: action.payload }


        case "CATEGORIES_PRODUCT":
            return { ...state, products: action.payload }

        case "SELECTED_PRODUCT":
            return { ...state, products: action.payload }


        default:
            return state
    }




}