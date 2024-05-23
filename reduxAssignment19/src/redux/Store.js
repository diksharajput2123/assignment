import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "../redux/counter"

 let store=configureStore({
    reducer:{
        counter:counterReducer
    }
})
export default store