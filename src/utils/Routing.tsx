import React from 'react'
import { Route, Routes } from 'react-router-dom'

import NotFound from '../components/NotFound.tsx/NotFound'
import Cart from '../components/cart/Cart'
import Favourite from '../components/favourite/Favourite'
import Layout from '../components/layout/Layout'
import Auth from '../screens/Auth/Auth'
import Home from '../screens/Home/Home'
import { CART, FAVOURITE, HOME, PRODUCT_ID } from './Routes'
import ProductPage from '../components/productPage/ProductPage'

interface IRoutes {
	path: string
	element: JSX.Element
	children?: IRoutes[]
}

const routes: IRoutes[] = [
	{
		path: HOME,
		element: <Home />,
	},
	{
		path: CART,
		element: <Cart />,
	},
	{
		path: FAVOURITE,
		element: <Favourite />,
	},
	{
		path: PRODUCT_ID,
		element: <ProductPage />,
	},
]

const Routing: React.FC = () => {
	return (
		<Routes>
			<Route path={'/'} element={<Layout />}>
				{routes.map((route, i) => (
					<Route key={i} path={route.path} element={route.element} />
				))}
			</Route>
			<Route path='/auth' element={<Auth />} />
			<Route path='*' element={<NotFound />} />
		</Routes>
	)
}

export default Routing
