import React, { useState } from 'react'

const WalletForm = props => {

    let [newWallet, setNewWallet] = useState({
        id: '',
        balance: 0,
        transactions: [],
        isCreating: false
    })

    const handleIDChange = e => {
        console.log(newWallet)
        setNewWallet({
            ...props.wallet,
            id: e.target.value
        })
    }

    const handleChange = e => {
        console.log(newWallet)
        setNewWallet({
            ...newWallet,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <form>
                <input
                    type='text'
                    name='id'
                    value={newWallet.id}
                    onChange={handleChange}
                    required
                ></input>
                <button onClick={e => {
                    e.preventDefault()
                    props.createMyWallet(newWallet)
                }}>Create id</button>

            </form>
            <form>
                <input
                    type='text'
                    value={newWallet.id}
                    onChange={handleIDChange}
                ></input>
                <button onClick={e => {
                    e.preventDefault()
                    props.updateMyId(newWallet.id)
                }}>Update id</button>
            </form>
        </div>
    )
}

export default WalletForm