import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { productsType } from '../../../screens/Home/Home'

enum Status {
	LOADING = 'loading',
	SUCCESS = 'success',
	ERROR = 'error'
}

type initialStateType = {
	items: productsType[]
	status: Status
}

const initialState: initialStateType = {
	items: [],
	status: Status.LOADING
}

export const ProductSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		setProducts(state, action: PayloadAction<productsType[]>) {
			state.items = action.payload
			state.status = Status.SUCCESS
		},
	},
})

export const { setProducts } = ProductSlice.actions
export default ProductSlice.reducer
