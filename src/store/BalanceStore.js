
import AppDispatcher from '../AppDispatcher';
import bankConstants from '../common/constants';
import {ReduceStore} from 'flux/utils';


class BankBalanceStore extends ReduceStore {
  
    getInitialState() {
        return 0;
    }
   reduce(state,action){
    switch (action.type) {
        case bankConstants.CREATED_ACCOUNT:
           return 0;
            break;
            case bankConstants.DEPOSITED_INTO_ACCOUNT:
            return state + action.ammount;
            break;
            case bankConstants.WITHDREW_FROM_ACCOUNT:
           return state - action.ammount;
          
    }
   }
};
export default new BankBalanceStore(AppDispatcher);