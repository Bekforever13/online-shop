import { PayloadAction,  createSlice } from '@reduxjs/toolkit'
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

// export const fetchProducts = createAsyncThunk(
//   'fetch/products',
//   async (ss) => {
//     const response = await axiosBasic.get('/products')
//     return response.data
//   }
// )

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
	// extraReducers: (builder) => {
	// 	builder.addCase(fetchProducts.fulfilled, (state, action) => {
	// 		state.items.push(action.payload)
	// 		state.status = Status.SUCCESS
	// 		console.log(action.payload);
			
	// 	})
	// 	builder.addCase(fetchProducts.pending, (state) => {
	// 		state.status = Status.LOADING
	// 	})
	// 	builder.addCase(fetchProducts.rejected, (state) => {
	// 		state.items = []
	// 		state.status = Status.ERROR
	// 	})
	// }
})

export const { setProducts } = ProductSlice.actions
export default ProductSlice.reducer
