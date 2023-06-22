import { configureStore } from '@reduxjs/toolkit'
import ProductReducer from './reducers/Products/ProductsSlice'

export const store = configureStore({
	reducer: {
		ProductReducer
	},
	devTools: true,
})
