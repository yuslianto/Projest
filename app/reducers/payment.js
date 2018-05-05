const initialState = {
    paymentS: [],
    isLoading: false,
    isSaved: false,
}
const paymentReducer = function (state=initialState, action) {
    switch (action.type) {
        case "ALL_PAYMENT_PENDING":
            return {...state, isLoading: true}
        case "ALL_PAYMENT_FULFILLED":
            return {...state, payments: action.payload.data, isLoading: false}
        case "CREATE_PAYMENT_FULFILLED":
            return {...state, isSaved: true}
        default:
            return state
    }
}

export default paymentReducer