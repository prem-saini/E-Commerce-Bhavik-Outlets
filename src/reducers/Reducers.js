import { ADD_CART, REMOVE_ALL, REMOVE_SINGLE } from "../constant/Constant";
const INIT_STATE = {
    carts: localStorage.getItem("datatokan",) ? JSON.parse(localStorage.getItem("datatokan")) : []
};
// console.log(INIT_STATE.carts, "sa")
export const cartreducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ADD_CART:
            console.log(action.payload, "99999");
            const IteamIndex = state.carts.findIndex((iteam) => iteam.id === action.payload.id);
            localStorage.setItem("datatokan", JSON.stringify(state.carts))
            if (IteamIndex >= 0) {
                state.carts[IteamIndex].qnty += 1
                return {
                    ...state,
                    carts: [...state.carts]
                }
            } else {
                const temp = { ...action.payload, qnty: 1 }
                return {
                    ...state,
                    carts: [...state.carts, temp]
                }

            }



        case REMOVE_ALL:
            const data = state.carts.filter((el) => el.id !== action.payload)
            return {
                ...state,
                carts: data

            }

        case REMOVE_SINGLE:
            const IteamIndex_dec = state.carts.findIndex((iteam) => iteam.id === action.payload.id);

            if (state.carts[IteamIndex_dec].qnty >= 1) {
                const dltiteams = state.carts[IteamIndex_dec].qnty -= 1
                console.log([...state.carts, dltiteams]);

                return {
                    ...state,
                    carts: [...state.carts]
                }
            } else if (state.carts[IteamIndex_dec].qnty === 1) {
                const data = state.carts.filter((el) => el.id !== action.payload);

                return {
                    ...state,
                    carts: data
                }
            }
        default:
            return state
    }
}
