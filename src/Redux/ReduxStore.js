import {configureStore} from '@reduxjs/toolkit'
import ReduxSliceReducer from './ReduxSlice';
const ReduxStore = configureStore({
    reducer : {
        productivityTracker:ReduxSliceReducer
    }
});
export default ReduxStore