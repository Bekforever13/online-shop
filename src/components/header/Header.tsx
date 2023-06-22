import { HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import Search from './Search'

const Header = () => {
	return (
		<header className='flex items-center justify-between bg-[#eee] px-[10%] py-4'>
			<Link to={'/'} className='font-bold text-2xl'>
				LOGO
			</Link>
			<Search />
			<div className='flex items-center gap-x-5 text-xl'>
				<Link to={'/favourite'}>
					<HeartOutlined />
				</Link>
				<Link to={'/cart'}>
					<ShoppingCartOutlined />
				</Link>
			</div>
		</header>
	)
}

export default Header
