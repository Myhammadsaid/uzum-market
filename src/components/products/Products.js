'use client'
import { useGetProducts } from '@/hooks/useGetProducts'
import {
	addToCart,
	decFromCart,
	incFromCart,
} from '@/store/features/cart/cartSlice'
import { toggleFavorite } from '@/store/features/favorite/favoriteSlice'
import Image from 'next/image'
import { CiHeart } from 'react-icons/ci'
import { IoCartOutline } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'

export default function Products() {
	const { products } = useGetProducts()
	const favorite = useSelector(state => state.favorite.value)
	const cart = useSelector(state => state.cart.value)
	const dispatch = useDispatch()

	console.log(cart)

	return (
		<section>
			<div className='flex items-center justify-center flex-wrap gap-4'>
				{products?.data?.length ? (
					products?.data?.slice(0, 8).map(item => (
						<div className='max-w-[300px]' key={item.id}>
							<Image
								className='bg-blue-500'
								width={300}
								height={300}
								src={item.images}
								alt={item.title}
							/>
							<h1 className='text-center mb-2'>{item.title}</h1>
							<div className='flex items-center gap-4 *:cursor-pointer'>
								<button onClick={() => dispatch(addToCart(item))}>
									<IoCartOutline size={40} />
								</button>
								<button onClick={() => dispatch(toggleFavorite(item))}>
									<CiHeart size={40} />
								</button>
								<button onClick={() => dispatch(incFromCart(item))}>
									+inc
								</button>
								<button onClick={() => dispatch(decFromCart(item))}>
									-dec
								</button>
							</div>
						</div>
					))
				) : (
					<h1>Loading...</h1>
				)}
			</div>
		</section>
	)
}
