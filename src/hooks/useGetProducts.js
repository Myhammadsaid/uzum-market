'use client'
import axios from 'axios'
import { useEffect, useState } from 'react'

export const useGetProducts = () => {
	const [products, setProducts] = useState([])

	useEffect(() => {
		const fetchProducts = async () => {
			const response = await axios.get('/products.json')
			setProducts(response)
		}
		fetchProducts()
	}, [])

	return { products }
}
