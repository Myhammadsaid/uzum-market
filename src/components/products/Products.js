'use client'
import { useGetProducts } from '@/layouts/ui/hooks/useGetProducts'
import { toggleFavorite } from '@/store/features/favorite/favoriteSlice'
import Image from 'next/image'
import { CiHeart } from 'react-icons/ci'
import { IoCartOutline } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'

export default function Products() {
	const { products } = useGetProducts()
	const value = useSelector(state => state.favorite.value)
	const dispatch = useDispatch()

	console.log(value)

	return (
		<div>
			<h1>Products</h1>
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
								<button>
									<IoCartOutline size={40} />
								</button>
								<button onClick={() => dispatch(toggleFavorite(item))}>
									<CiHeart size={40} />
								</button>
							</div>
						</div>
					))
				) : (
					<h1>Loading...</h1>
				)}
			</div>
		</div>
	)
}
