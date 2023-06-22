import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	items: [],
	loading: false,
}

export const ProductSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		setProducts(state, action) {
			state.items = action.payload
		},
	},
})

export const { setProducts } = ProductSlice.actions
export default ProductSlice.reducer
