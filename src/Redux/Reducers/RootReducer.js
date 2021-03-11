import {combineReducers} from 'redux'

import reducer1 from './reducer1'

export default combineReducers({
    reducer: reducer1.reducer
});