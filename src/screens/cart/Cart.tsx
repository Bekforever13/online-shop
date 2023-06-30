import React from 'react'
import CartItemBlock from '../../components/CartItemBlock/CartItemBlock'
import { useAppSelector } from '../../hooks/useAppSelector'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { removeAllItemsFromCart } from '../../redux/reducers/Cart/Cart'

const Cart: React.FC = () => {
	const { items, totalPrice } = useAppSelector(state => state.CartReducer)
	const dispatch = useAppDispatch()

	const removeAllItems = () => {
		dispatch(removeAllItemsFromCart())
	}

	return (
		<div className='py-[5%] px-[10%]'>
			<div className='flex items-center justify-between'>
				<h1 className='font-bold my-10 text-3xl'>Cart</h1>
				<span className=' text-xl'>
					Total price: {totalPrice.toLocaleString().slice(0, 6)}
				</span>
				<button className='text-xl' onClick={removeAllItems} >
					Delete all items
				</button>
			</div>
			<div className='flex flex-col gap-y-10'>
				{items.map(item => (
					<CartItemBlock key={item.id} cartItem={item} />
				))}
			</div>
		</div>
	)
}

export default Cart
