'use client'
import { useState } from 'react'
import { BsSend } from 'react-icons/bs'
import { CiEdit } from 'react-icons/ci'
import { FaSave } from 'react-icons/fa'
import { GoTrash } from 'react-icons/go'

export default function Message() {
	const [message, setMessage] = useState('')
	const [sendMessage, setSendMessage] = useState([])
	const [editMessage, setEditMessage] = useState(null)

	const handleDeleteMessage = data => {
		const filtered = sendMessage.filter(item => item.id !== data.id)
		setSendMessage([...filtered])
	}

	const handleEditMessage = data => {
		const filter = sendMessage.filter(item => item.id !== data.id)
		console.log(data)
		console.log(filter)
		setSendMessage([...filter, { ...editMessage }])
		setEditMessage(null)
	}

	const handleSubmit = e => {
		e.preventDefault()
		const time = new Date()
		const timesend = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
		setSendMessage([
			...sendMessage,
			{ message, date: timesend, id: new Date().getTime() },
		])
		setMessage('')
	}

	return (
		<section className='px-5'>
			<div className='max-w-[300px] h-[200px] flex flex-col gap-3'>
				{sendMessage.length ? (
					sendMessage.map(item => (
						<p
							key={item.id}
							className='flex flex-col p-2 rounded-2xl border-[1px] border-blue-500'
						>
							<b>{item.date}</b>
							<h1 className='text-xl'>{item.message}</h1>
							<div className='flex items-center gap-4 *:text-xl *:cursor-pointer'>
								<button onClick={() => setEditMessage(item)}>
									<CiEdit />
								</button>
								<button onClick={() => handleDeleteMessage(item)}>
									<GoTrash />
								</button>
							</div>
						</p>
					))
				) : (
					<h1>can i help you</h1>
				)}
			</div>
			<form className='max-w-[400px]' onSubmit={handleSubmit}>
				<label
					htmlFor='message'
					className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
				>
					Your message
				</label>
				<textarea
					required
					id='message'
					rows='4'
					value={message}
					onChange={e => setMessage(e.target.value)}
					className='outline-0 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white'
					placeholder='Write your thoughts here...'
				></textarea>
				<button
					type='submit'
					className='mt-2 cursor-pointer flex items-center gap-2 text-white bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-10 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'
				>
					<span>Отправить</span>
					<BsSend />
				</button>
			</form>
			{editMessage ? (
				<div className='fixed top-[50%] left-[50%] transform-[translate-[-50%, -50%]] w-[400px] h-[400px]'>
					<form action=''>
						<textarea
							required
							id='message'
							rows='4'
							value={editMessage.message}
							onChange={e =>
								setEditMessage(prev => ({ ...prev, message: e.target.value }))
							}
							className='outline-0 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white'
							placeholder='Write your thoughts here...'
						></textarea>
						<button
							onClick={() => handleEditMessage(editMessage)}
							type='button'
							className='mt-2 cursor-pointer flex items-center gap-2 text-white bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-10 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'
						>
							<span>Сохронить</span>
							<FaSave />
						</button>
						<button
							onClick={() => setEditMessage(null)}
							type='button'
							className='cursor-pointer text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 outline-none'
						>
							Выйти
						</button>
					</form>
				</div>
			) : (
				<></>
			)}
		</section>
	)
}
