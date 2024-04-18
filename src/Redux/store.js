import {createStore,combineReducers} from "redux";
import beneficiaryReducer from './Reducers/benificiaryReducer';

const rootReducer = combineReducers({beneficiaryReducer})

const store = createStore(rootReducer);

 export default store