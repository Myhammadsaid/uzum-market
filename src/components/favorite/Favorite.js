'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { CiHeart } from 'react-icons/ci'
import { IoCartOutline } from 'react-icons/io5'
import { useSelector } from 'react-redux'

export default function Favorite() {
	const { back } = useRouter()
	const favorite = useSelector(state => state.favorite.value)

	return (
		<div>
			<h1>Favorite</h1>
			<button
				onClick={() => back()}
				className='text-2xl cursor-pointer underline'
			>
				Go to Back
			</button>
			<div className='flex items-center justify-center flex-wrap gap-4'>
				{favorite.length ? (
					favorite.map(item => (
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
					<h1>Not Found</h1>
				)}
			</div>
		</div>
	)
}
