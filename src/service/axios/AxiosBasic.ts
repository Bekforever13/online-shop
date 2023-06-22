import axios from 'axios'

const axiosBasic = axios.create({
	baseURL: 'https://fakestoreapi.com/',
})

export default axiosBasic
