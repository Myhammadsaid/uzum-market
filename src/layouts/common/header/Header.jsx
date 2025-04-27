import Link from 'next/link'
import { CiHeart, CiShoppingCart, CiUser } from 'react-icons/ci'
import { WiMoonAltFirstQuarter } from 'react-icons/wi'

export default function Header() {
	return (
		<header>
			<div className='container px-2'>
				<nav className='flex items-center justify-between'>
					<Link href={'/'}>
						<h1 className='text-5xl'>Logo</h1>
					</Link>
					<ul className='flex items-center gap-6 *:cursor-pointer *:text-md **:flex **:gap-2'>
						<Link href={'/message'}>
							<li>
								<CiUser size={25} /> Войти
							</li>
						</Link>
						<Link href={'/favorite'}>
							<li>
								<CiHeart size={25} /> Избраные
							</li>
						</Link>
						<Link href={'/favorite'}>
							<li>
								<CiShoppingCart size={25} /> Корзина
							</li>
						</Link>
						<button>
							{/* <WiMoonAltThirdQuarter /> */}
							<WiMoonAltFirstQuarter size={25} />
						</button>
					</ul>
				</nav>
			</div>
		</header>
	)
}
