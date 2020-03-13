import React, { useEffect } from 'react';
import WalletForm from './WalletForm'
import { connect } from 'react-redux'
import { createMyWallet, getWallet, updateMyId } from './actions'
import './App.css';

const App = props => {

  useEffect(() => {

  }, [])

  

  return (
    <div className='App'>
      <WalletForm createMyWallet={props.createMyWallet} updateMyId={props.updateMyId} wallet={props.wallet} />
      <button onClick={() => props.getWallet()}>Get info</button>
      <h2>id: {props.wallet.id}</h2>
      <h2>Balance: {props.wallet.balance}</h2>
      <h2>Transactions: {props.wallet.transactions}</h2>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    wallet: state.wallet
  };
};

export default connect(
  mapStateToProps,
  {
    createMyWallet,
    getWallet,
    updateMyId
  }
)(App);
