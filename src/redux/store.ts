import CounterReducer from "./features/counterSlice";
import {configureStore} from "@reduxjs/toolkit"
import {userApi} from '../redux/services/userApi'
import { setupListeners } from "@reduxjs/toolkit/query/react";


export const store = configureStore({
    reducer:{
        CounterReducer,
        [userApi.reducerPath]: userApi.reducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat([userApi.middleware])
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch