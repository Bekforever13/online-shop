import { Button } from 'antd'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAppSelector } from '../../hooks/useAppSelector'
import { productsType } from '../../screens/Home/Home'
import styles from './ProductPage.module.scss'

const ProductPage: React.FC = () => {
	const [product, setProduct] = useState<productsType>()
	const products = useAppSelector(state => state.ProductReducer.items)
	const params = useParams()

	useEffect(() => {
		window.scrollTo(0, 0)
		products.map((prod: productsType) => {
			prod.id === Number(params.id) ? setProduct(prod) : ''
		})
	}, [])

	return (
		<div className={styles.root}>
			<div className={styles.main}>
				<img src={product?.image} alt='' />
				<div>
					<h1>{product?.title}</h1>
					<h4>
						<b>Цена</b> - ${product?.price}
					</h4>
					<h4>
						<b>Рейтинг</b> - {product?.rating.rate}
					</h4>
					<h4 className={styles.desc}>{product?.description}</h4>
					<h4>
						<b>Категория</b> - {product?.category}
					</h4>
				</div>
			</div>
			<div className={styles.actions}>
				<Button
					type='primary'
					style={{ background: '#db9969', fontWeight: '600' }}
				>
					В корзину
				</Button>
				<Button type='primary' style={{ background: 'red', fontWeight: '600' }}>
					В избранное
				</Button>
			</div>
		</div>
	)
}

export default ProductPage
