import {configureStore} from '@reduxjs/toolkit'
import merchantReducer from './features/Merchants'

const store = configureStore({
    reducer: {
        merchants: merchantReducer,
    }
})

export default store