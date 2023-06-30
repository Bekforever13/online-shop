import { message } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { addItemToCart } from '../../redux/reducers/Cart/Cart'
import { productsType } from '../../screens/Home/Home'
import styles from './ItemBlock.module.scss'

const ItemBlock: React.FC<productsType> = (product: productsType) => {
	const { id, image, price, title, count } = product
	const dispatch = useAppDispatch()

	const onAddToCart = () => {
		dispatch(addItemToCart(product))
		message.success('Product successfully added to cart')
	}

	return (
		<div className={styles.root}>
			<Link to={`/products/${id}`}>
				<div className={styles.img}>
					<img className='h-[250px] w-[200px]' src={image} alt='' />
				</div>
				<div>
					<span>{title}</span>
				</div>
			</Link>
			<span className={styles.price}>${price}</span>
			<div className={styles.buttons}>
				{count && count > 0 ? (
					<button onClick={onAddToCart} className={styles.to_cart}>
						<span>{count}</span>В Корзину
					</button>
				) : (
					<button onClick={onAddToCart} className={styles.to_cart}>
						В Корзину
					</button>
				)}
			</div>
		</div>
	)
}

export default ItemBlock
