import { Button } from 'antd'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAppSelector } from '../../hooks/useAppSelector'
import { productsType } from '../../screens/Home/Home'

// type selectorType = {
// 	FavouriteReducer: {
// 		items: [] | productsType[]
// 		loading: boolean
// 	}
// 	ProductReducer: {
// 		items: [] | productsType[]
// 		status: boolean
// 	}
// }

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
		<div>
			<div className='flex items-center justify-center gap-x-10 my-20'>
				<img className='w-[300px]' src={product?.image} alt='' />
				<div className='flex flex-col items-center justify-center gap-y-5'>
					<h1 className='text-2xl font-bold'>{product?.title}</h1>
					<h4 className=''>
						<b>Цена</b> - ${product?.price}
					</h4>
					<h4 className=''>
						<b>Рейтинг</b> - {product?.rating.rate}
					</h4>
					<h4 className='w-[400px]'>{product?.description}</h4>
					<h4 className=''>
						<b>Категория</b> - {product?.category}
					</h4>
				</div>
			</div>
			<div className='flex justify-center items-center gap-x-5 mb-10'>
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
