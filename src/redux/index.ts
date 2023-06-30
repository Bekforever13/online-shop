import { configureStore } from '@reduxjs/toolkit'
import ProductReducer from './reducers/Products/ProductsSlice'
import CartReducer from './reducers/Cart/Cart'

const store = configureStore({
	reducer: {
		ProductReducer,
		CartReducer
	},
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch