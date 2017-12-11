
import AppDispatcher from '../AppDispatcher';
import bankConstants from '../common/constants';
import {Store} from 'flux/utils';

let balance = 0;

class BankBalanceStore extends Store {
   constructor(dispatcher){
       super(dispatcher);
   }
    getState() {
        return balance;
    }
   __onDispatch(action){
    switch (action.type) {
        case bankConstants.CREATED_ACCOUNT:
            balance = 0;
            this.__emitChange();
            break;
            case bankConstants.DEPOSITED_INTO_ACCOUNT:
            balance = balance+action.ammount;
            this.__emitChange();           
            break;
            case bankConstants.WITHDREW_FROM_ACCOUNT:
            balance -= action.ammount;
            this.__emitChange();
          
    }
   }
};
export default new BankBalanceStore(AppDispatcher);