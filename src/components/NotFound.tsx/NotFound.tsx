import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NotFound.module.scss'

const NotFound: React.FC = () => {
	return (
		<div className={styles.root}>
			<header>
				<h4>404 not found</h4>
			</header>

			<main>
				<section className='section--image'>
					<img
						src='https://rvs-404-not-found.onrender.com/Scarecrow.png'
						alt=''
					/>
				</section>
				<section className='section--content'>
					<h5>I have bad news for you</h5>
					<p>
						The page you are looking for might be removed or is temporarily
						unavailable
					</p>
					<Link to={'/'} className='underline text-blue-400'>Back to homepage</Link>
				</section>
			</main>
		</div>
	)
}

export default NotFound
