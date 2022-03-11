import { combineReducers } from 'redux'
import dataReducer from './dataReducer'
import userReducer from './userReducer'

const mainReducer = combineReducers({

    dataReducer,
    userReducer

})
export default mainReducer