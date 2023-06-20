import { ShoppingCartOutlined, HeartOutlined, UserOutlined } from '@ant-design/icons'
import Search from './Search'

const Header = () => {
	return (
		<header>
			<div>
				<div>LOGO</div>
				<div>
					<Search />
				</div>
			</div>
			<div>
				<ul>
					<li>Коллекции</li>
					<li>Мебель</li>
					<li>Освещение</li>
					<li>Аксессуары</li>
					<li>Доставка</li>
				</ul>
			</div>
			<div>
				<span>Nukus</span>
				<UserOutlined />
        <HeartOutlined />
        <ShoppingCartOutlined />
			</div>
		</header>
	)
}

export default Header
