import React, { useEffect } from 'react'
import ItemBlock from '../../components/ItemBlock/ItemBlock'
import Skeleton from '../../components/ItemBlock/Skeleton/Skeleton'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { useAppSelector } from '../../hooks/useAppSelector'
import { setProducts } from '../../redux/reducers/Products/ProductsSlice'
import axiosBasic from '../../service/axios/AxiosBasic'
import styles from './Home.module.scss'

export type productsType = {
	category: string
	description: string
	id: number
	image: string
	price: number
	rating: {
		count: number
		rate: number
	}
	title: string
}

interface IProducts {
	ProductReducer: {
		items: productsType[] | []
		status: string
	}
}

const Home: React.FC = () => {
	const dispatch = useAppDispatch()
	const { items, status } = useAppSelector(
		(state: IProducts) => state.ProductReducer
	)

	useEffect(() => {
		axiosBasic('/products').then(res => dispatch(setProducts(res.data)))
	}, [])

	const products = items.map((product: productsType) => (
		<ItemBlock key={product.id} {...product} />
	))

	return (
		<div className={styles.root}>
			<h1>Хиты продаж</h1>
			<div className={styles.products}>
				{status === 'loading' ? <Skeleton /> : products}
			</div>
		</div>
	)
}

export default Home
