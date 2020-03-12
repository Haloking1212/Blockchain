import React, { useState } from 'react'
import { createMyWallet } from './actions'
import {connect} from 'react-redux';

const Wallet = props => {

    let [wallet, setWallet] = useState({id:'', coin_balance: 0})

    const handleChange = e => {
        setWallet({
            ...wallet,
            [e.target.name]: e.target.value
        })
    }

     const submitID = e => {
         e.preventDefault()
        props.createMyWallet(wallet)
    }

    return (
        <div>
            <form onSubmit={submitID}>
                <input
                    type='text'
                    name='id'
                    value={wallet.id}
                    onChange={handleChange}
                    required
                ></input>
                <button type='submit'>Create Wallet</button>
            </form>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        wallet: state.wallet
    };
};

export default connect(
    mapStateToProps,
    { createMyWallet }
)(Wallet);