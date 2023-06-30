import { DeleteOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons'
import React from 'react'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import {
	addCountOfItem,
	minusCountOfItem,
	removeItemFromCart,
} from '../../redux/reducers/Cart/Cart'
import { productsType } from '../../screens/Home/Home'
import styles from './CartItemBlock.module.scss'

const CartItemBlock: React.FC<{ cartItem: productsType }> = ({ cartItem }) => {
	const { image, price, description, title, count } = cartItem
	const dispatch = useAppDispatch()

	const incrementCount = () => {
		dispatch(addCountOfItem(cartItem))
	}
	const decrementCount = () => {
		dispatch(minusCountOfItem(cartItem))
	}

	const removeCartItem = () => {
		dispatch(removeItemFromCart(cartItem))
	}

	return (
		<div className={styles.root}>
			<div className={styles.title}>
				<img src={image} alt='' />
				<div>
					<h1>{title}</h1>
					<p>{description}</p>
				</div>
			</div>
			<div>${price}</div>
			<div className={styles.actions}>
				<div className={styles.count}>
					<button disabled={count === 1} onClick={decrementCount}>
						<MinusOutlined />
					</button>
					<span>{count}</span>
					<button onClick={incrementCount}>
						<PlusOutlined />
					</button>
				</div>
				<button onClick={removeCartItem} className={styles.remove}>
					<DeleteOutlined />
				</button>
			</div>
		</div>
	)
}

export default CartItemBlock
