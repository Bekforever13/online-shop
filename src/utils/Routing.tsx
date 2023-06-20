import { Route, Routes } from 'react-router-dom'

import Header from '../components/header/Header'
import Auth from '../screens/Auth/Auth'
import Home from '../screens/Home/Home'
import { HOME } from './Routes'

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
]

const Routing = () => {
	return (
		<>
			<Routes>
				<Route path={'/'} element={<Header />}>
					{routes.map((route, i) => (
						<Route key={i} path={route.path} element={route.element} />
					))}
				</Route>
				<Route path='/auth' element={<Auth />} />
			</Routes>
		</>
	)
}

export default Routing
