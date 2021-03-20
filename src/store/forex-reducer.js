const ADD_DATA_FOREX = "ADD_DATA_FOREX"

const initialState = {

}

export const forexReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case ADD_DATA_FOREX:
            return { ...state, ...payload }

        default:
            return state
    }
}
