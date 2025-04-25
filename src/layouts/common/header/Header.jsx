import Link from 'next/link'
import { WiMoonAltFirstQuarter } from 'react-icons/wi'

export default function Header() {
	return (
		<header>
			<div className='container px-2'>
				<nav className='flex items-center justify-between'>
					<h1 className='text-5xl'>Logo</h1>
					<ul className='flex items-center gap-6 *:cursor-pointer *:text-xl'>
						<Link href={'/products'}>
							<li>Products</li>
						</Link>
						<Link href={'/message'}>
							<li>Message</li>
						</Link>
						<Link href={'/favorite'}>
							<li>Favorite</li>
						</Link>
					</ul>
					<button className='cursor-pointer'>
						{/* <WiMoonAltThirdQuarter /> */}
						<WiMoonAltFirstQuarter size={25} />
					</button>
				</nav>
			</div>
		</header>
	)
}
