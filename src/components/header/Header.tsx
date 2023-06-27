import {
	HeartOutlined,
	SearchOutlined,
	ShoppingCartOutlined,
} from '@ant-design/icons'
import { Button, Modal } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'
import Search from './Search'

const Header: React.FC = () => {
	const [loading, setLoading] = useState(false)
	const [open, setOpen] = useState(false)
	const [size, setSize] = useState(0)

	const showModal = () => {
		setOpen(true)
	}

	const handleOk = () => {
		setLoading(true)
		setTimeout(() => {
			setLoading(false)
			setOpen(false)
		}, 3000)
	}

	const handleCancel = () => {
		setOpen(false)
	}

	useEffect(() => {
		function handleResize() {
			setSize(window.innerWidth)
		}

		window.addEventListener('resize', handleResize)

		handleResize()

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [setSize])

	return (
		<>
		<header className={styles.root}>
			<Link className={styles.logo} to={'/'}>LOGO</Link>
			<Search />
			<div className={styles.buttons}>
				{size < 600 ? (
					<button onClick={showModal}>
						<SearchOutlined />
					</button>
				) : (
					''
				)}
				<Link to={'/favourite'}>
					<HeartOutlined />
				</Link>
				<Link to={'/cart'}>
					<ShoppingCartOutlined />
				</Link>
			</div>
		</header>
			<Modal
				open={open}
				onOk={handleOk}
				onCancel={handleCancel}
				footer={[
					<div className='my-10'>
						<input placeholder='Search...' className='w-[80%] mr-5 border py-2 px-4' />
						<Button
							key='submit'
							type='primary'
							loading={loading}
							onClick={handleOk}
							className='bg-blue-500 '
						>
							OK
						</Button>
						,
					</div>,
				]}
			></Modal></>
	)
}

export default Header
