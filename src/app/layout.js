import Footer from '@/layouts/common/footer/Footer'
import Header from '@/layouts/common/header/Header'
import { Roboto, Roboto_Mono } from 'next/font/google'
import './globals.css'

const robotoSans = Roboto({
	variable: '--font-roboto-sans',
	subsets: ['latin'],
})

const robotoMono = Roboto_Mono({
	variable: '--font-roboto-mono',
	subsets: ['latin'],
})

export const metadata = {
	title: 'Uzum Market — Интернет-магазин и Маркетплейс в Узбекистане',
	description: 'Uzum Market — Интернет-магазин и Маркетплейс в Узбекистане',
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<head>
				<link rel='icon' href='https://uzum.uz/static/img/icons/favicon.svg' />
			</head>
			<body
				className={`${robotoSans.variable} ${robotoMono.variable} antialiased`}
			>
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	)
}
