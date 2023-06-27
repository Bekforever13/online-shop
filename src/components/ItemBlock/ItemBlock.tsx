import { HeartOutlined, HeartFilled } from '@ant-design/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import { addToFavourite } from '../../redux/reducers/Favourite/FavouriteSlice'
import { productsType } from '../../screens/Home/Home'
import styles from './ItemBlock.module.scss'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { message } from 'antd'
import { useAppSelector } from '../../hooks/useAppSelector'

const ItemBlock: React.FC<productsType> = (product: productsType) => {
	const dispatch = useAppDispatch()
	const { id, image, price, title } = product
	const favouriteItems = useAppSelector(state => state.FavouriteReducer.items)
	const [isFav, setIsFav] = React.useState(false)
	
	const onClickFavourite = () => {
		message.success('Successfully added to favourite')
		dispatch(addToFavourite(product))
	}

	React.useEffect(() => {
		favouriteItems.map((favItem: productsType) => {
			if (favItem) {
				favItem.id === id ? setIsFav(true) : setIsFav(false)
			}
		})
	}, [favouriteItems])

	// const isFavourite = () => {
	// 	favouriteItems.map((favItem: productsType) => {
	// 		if (favItem) {
	// 			favItem.id === id ? setIsFav(true) : setIsFav(false)
	// 		}
	// 	})
	// }
	


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
				<button className={styles.to_cart}>В Корзину</button>
				<button onClick={onClickFavourite} className={styles.to_fav}>
					{isFav ? <HeartFilled /> : <HeartOutlined />}
					{/* <HeartOutlined /><HeartFilled /> */}
				</button>
			</div>
		</div>
	)
}

export default ItemBlock
