import { useEffect } from 'react'
import ItemBlock from '../../components/ItemBlock/ItemBlock'
import axiosBasic from '../../service/axios/AxiosBasic'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from '../../redux/reducers/Products/ProductsSlice'

type productsType = {
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
    loading: boolean
  }
}

const Home = () => {
  const dispatch = useDispatch()
  const products = useSelector((state: IProducts) => (state.ProductReducer.items))

	useEffect(() => {
		axiosBasic('/products/').then(res => dispatch(setProducts(res.data)))
	}, [])

	return (
		<div className='px-[10%] flex flex-col py-10 gap-y-5'>
			<h1 className='text-2xl font-semibold'>Хиты продаж</h1>
			<div className='grid grid-cols-4'>
				{products.map(product => {
          return <ItemBlock />
        })}
			</div>
		</div>
	)
}

export default Home
