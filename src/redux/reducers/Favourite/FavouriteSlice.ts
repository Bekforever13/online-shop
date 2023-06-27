import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { productsType } from '../../../screens/Home/Home'

type initialStateProps = {
	items: productsType[]
	loading: boolean
}

const initialState: initialStateProps = {
	items: [],
	loading: false,
}

export const FavouriteSlice = createSlice({
	name: 'favourite',
	initialState,
	reducers: {
		addToFavourite(state, action: PayloadAction<productsType>) {
			state.items.push(action.payload)
		},
	},
})

export const { addToFavourite } = FavouriteSlice.actions
export default FavouriteSlice.reducer
