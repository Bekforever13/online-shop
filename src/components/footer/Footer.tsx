const Footer = () => {
	return (
		<div className='flex flex-col'>
			<div className='flex items-center justify-center gap-x-10 w-full h-[280px] bg-[#eeceb738]'>
				<p className='w-[420px] text-2xl font-bold'>
					Подпишитесь на нашу новостную рассылку и получите скидку 10% на первую
					покупку!
				</p>
				<input type='text' placeholder='Введите ваш e-mail' className='w-[530px] border outline-none px-5 py-3 rounded-md shadow-md text-base' />
				<button className='bg-[#DB9969] rounded-md text-white px-5 py-3'>Подписаться</button>
			</div>
			<div className='bg-[#B3A094] py-10 text-center text-white text-xl'>© 2023 Copywright. Developer: Aydarbaev Bekpolat</div>
		</div>
	)
}

export default Footer
