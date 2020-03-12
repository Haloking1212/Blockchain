import {
    UPDATE_MY_ID,
    CREATE_MY_WALLET
} from '../actions'

export const initialState = {
    wallet: {
        id: '',
        coinBalance: 0
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
            return {
                ...action.payload
            }
        default:
            return {
                ...state
            }
    }
}