import { axiosWithAuth } from '../utils/axiosWithAuth'
export const UPDATE_MY_ID = 'UPDATE_MY_ID'
export const CREATE_MY_WALLET = 'CREATE_MY_WALLET'
export const GET_MY_WALLET = 'GET_MY_WALLET'

export const updateMyId = (id) => dispatch => {
    axiosWithAuth()
        .put('/my_wallet', id)
        .then(res => {
            console.log(`ID updated to ${res}`)
        })
        .catch(err => {
            console.log(err)
        })
}

export const getWallet = () => dispatch => {
    axiosWithAuth()
        .get('/my_wallet')
        .then(res => {
            dispatch({ type: CREATE_MY_WALLET, payload: res})
        })
        .catch(err => {
            console.log(err)
        })
}

export const createMyWallet = (wallet) => dispatch => {
    console.log(wallet)
    axiosWithAuth()
        .post('/my_wallet')
        .then(res => {
            console.log(`Created ${JSON.stringify(wallet)}`)
            dispatch({ type: CREATE_MY_WALLET, payload: wallet })
        })
        .catch(err => {
            console.log(err)
        })
}