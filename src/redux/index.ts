import { configureStore } from '@reduxjs/toolkit'
import ProductReducer from './reducers/Products/ProductsSlice'
import FavouriteReducer from './reducers/Favourite/FavouriteSlice'

const store = configureStore({
	reducer: {
		ProductReducer,
		FavouriteReducer
	},
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch