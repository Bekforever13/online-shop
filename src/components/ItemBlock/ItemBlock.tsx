import { HeartOutlined } from '@ant-design/icons'

const ItemBlock = () => {
	return (
		<div className='flex flex-col border w-[250px] p-5 gap-y-2'>
			<img
				width={200}
				height={400}
				src='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
				alt=''
			/>
			<span>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</span>
			<span className='text-[#adadad]'>$109.95</span>
			<div className='flex justify-between items-center'>
				<button className='py-2 px-4 bg-[#DB9969] rounded-xl text-white'>
					В Корзину
				</button>
				<button className='text-xl'>
					<HeartOutlined />
				</button>
			</div>
		</div>
	)
}

export default ItemBlock
