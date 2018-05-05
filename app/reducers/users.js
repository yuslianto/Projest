const initialState = {
    users: [],
    isLoading: false,
    isSaved: false,
}
const usersReducer = function (state=initialState, action) {
    switch (action.type) {
        case "ALL_USERS_PENDING":
            return {...state, isLoading: true}
        case "ALL_USERS_FULFILLED":
            return {...state, courses: action.payload.data, isLoading: false}
        case "CREATE_USERS_FULFILLED":
            return {...state, isSaved: true}
        default:
            return state
    }
}

export default usersReducer