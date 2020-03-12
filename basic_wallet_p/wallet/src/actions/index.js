import {axiosWithAuth} from '../utils/axiosWithAuth'
export const UPDATE_MY_ID = 'UPDATE_MY_ID'
export const CREATE_MY_WALLET = 'CREATE_MY_WALLET'

export const updateMyId = (wallet) => dispatch => {
    axiosWithAuth()
        .put('/my_wallet', wallet)
        .then(res => {
            console.log(`ID updated to ${res}`)
        })
        .catch(err => {
            console.log(err)
        })
}

export const createMyWallet = (wallet) => dispatch => {
    axiosWithAuth()
        .post('/my_wallet')
        .then(res => {
            console.log(`Created ${JSON.stringify(res.data)}`)
            dispatch({ type: CREATE_MY_WALLET, payload: wallet })
        })
        .catch(err => {
            console.log(err)
        })
}