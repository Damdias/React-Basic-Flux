import AppDispatcher from '../AppDispatcher';
import bankConstants from '../common/constants';


let BankActions = {
    createAccount(){
        AppDispatcher.dispatch({
            type:bankConstants.CREATED_ACCOUNT,
            ammount:0
        });
    },
    depositIntoAccount(ammount){
        AppDispatcher.dispatch({
            type: bankConstants.DEPOSITED_INTO_ACCOUNT,
            ammount:ammount
        });
    },
    withdrawFromAccount(ammount){
        AppDispatcher.dispatch({
            type:bankConstants.WITHDREW_FROM_ACCOUNT,
            ammount:ammount
        });
    }
}

export default BankActions;