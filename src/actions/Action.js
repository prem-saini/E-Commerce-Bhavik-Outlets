export const ADD = (item) => {

    return {
        type: "ADD_CART",
        payload: item
    }
}

export const DLT = (id) => {
    return {
        type: "REMOVE_ALL",
        payload: id
    }
}

export const REMOVE = (item) => {
    return {
        type: "REMOVE_SINGLE",
        payload: item
    }
}