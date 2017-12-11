import React from 'react';
import {render} from 'react-dom';
import {Container} from "flux/utils"
import BankBalanceStore from "./store/BalanceStore";
import BankActions from './action/BankActions';

class App extends React.Component{
    constructor(props){
     super(props);
     BankActions.createAccount();
        this.deposit = this.deposit.bind(this);
        this.withdraw  = this.withdraw.bind(this);
    }
    
    deposit(){
        BankActions.depositIntoAccount(Number(this.refs.ammount.value));
        this.refs.ammount.value = '';
    }
    withdraw(){
        BankActions.withdrawFromAccount(Number(this.refs.ammount.value));
        this.refs.ammount.value = '';
    }
    render(){
        return(
            <div>
                <header>FluxTrust Bank</header>
                <h1>Your balance is ${(this.state.balance).toFixed(2)}</h1>
                <div className="atm">
                    <input type="text" placeholder="Enter Ammount" ref ="ammount"/>
                    <br/>
                    <button onClick={this.withdraw}>Withdraw</button>
                    <button onClick={this.deposit}>Deposit</button>
                </div>
            </div>
        );
    }
}
App.getStores = ()=> ([BankBalanceStore]);
App.calculateState = (pre) => ({balance: BankBalanceStore.getState()});

const AppContainer = Container.create(App);
render(<AppContainer/>,document.getElementById("app"));