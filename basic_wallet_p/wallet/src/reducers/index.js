import {
    UPDATE_MY_ID,
    CREATE_MY_WALLET,
    GET_MY_WALLET
} from '../actions'

const initialState = {
    wallet: {
        id: '',
        balance: 0,
        transactions: []
    }
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_MY_ID:
            return {
                ...state,
                id: action.payload
            }
        case CREATE_MY_WALLET:
            console.log(action.payload)
            return {
                ...state,
                wallet: action.payload
            }
        case GET_MY_WALLET:
            console.log(action.payload)
            return {
                ...state,
                wallet: action.payload
            }
        default:
            return {
                ...state
            }
    }
}