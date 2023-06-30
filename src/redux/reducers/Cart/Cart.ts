import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { productsType } from '../../../screens/Home/Home'

type initialStateProps = {
	items: productsType[]
	totalPrice: number
	loading: boolean
	countOfCartItems: number
}

const initialState: initialStateProps = {
	items: [],
	totalPrice: 0,
	loading: false,
	countOfCartItems: 0,
}

const CartSlice = createSlice({
	name: 'Cart',
	initialState,
	reducers: {
		addItemToCart(state, action: PayloadAction<productsType>) {
			const findItem = state.items.find(obj => obj.id === action.payload.id)

			if (findItem && findItem.count) {
				findItem.count++
			} else {
				state.items.push({ ...action.payload, count: 1 })
			}

			state.countOfCartItems++
			state.totalPrice += action.payload.price
		},
		addCountOfItem(state, action: PayloadAction<productsType>) {
			const findItem = state.items.find(obj => obj.id === action.payload.id)
			if (findItem?.count) {
				findItem.count++
				state.totalPrice += action.payload.price
				state.countOfCartItems += 1
			}
		},
		minusCountOfItem(state, action: PayloadAction<productsType>) {
			const findItem = state.items.find(obj => obj.id === action.payload.id)
			if (findItem?.count) {
				findItem.count--
				state.totalPrice -= action.payload.price
				state.countOfCartItems -= 1
			}
		},
		removeItemFromCart(state, action: PayloadAction<productsType>) {
			state.items = state.items.filter(obj => obj.id !== action.payload.id)
			if (action.payload.count && action.payload.price) {
				state.countOfCartItems -= action.payload.count
				state.totalPrice -= action.payload.count * action.payload.price
			}
		},
		removeAllItemsFromCart(state) {
			state.items = []
			state.countOfCartItems = 0
			state.totalPrice = 0
		},
	},
})

export const {
	addItemToCart,
	addCountOfItem,
	minusCountOfItem,
	removeItemFromCart,
	removeAllItemsFromCart,
} = CartSlice.actions
export default CartSlice.reducer
