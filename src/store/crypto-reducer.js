

const ADD_DATA_CRYPTO = "ADD_DATA_CRYPTO"


const initialState = {
    

}

export const cryptoReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case ADD_DATA_CRYPTO:
            return { ...state, ...payload }

        default:
            return state
    }
}

// export const addDataAC = (payload) => ({ type: ADD_DATA_CRYPTO, payload })
// export const startThunk = () => {
//     return start()
// }