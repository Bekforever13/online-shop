import React from 'react'
import styles from './Footer.module.scss'

const Footer: React.FC = () => {
	return (
		<div className={styles.root}>
			<div className={styles.first}>
				<p>
					Подпишитесь на нашу новостную рассылку и получите скидку 10% на первую
					покупку!
				</p>
				<input type='text' placeholder='Введите ваш e-mail' />
				<button>Подписаться</button>
			</div>
			<div className={styles.second}>© 2023 Copywright. Developer: Aydarbaev Bekpolat</div>
		</div>
	)
}

export default Footer
