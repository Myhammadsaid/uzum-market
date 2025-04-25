'use client'
import { decrement, increment } from '@/store/features/counter/counterSlice'
import { FiMinusCircle, FiPlusCircle } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'

export default function Counter() {
	const counter = useSelector(state => state.counter.value)
	const dispatch = useDispatch()

	return (
		<div className='flex flex-col items-center justify-center'>
			<div className='flex items-center gap-5 *:cursor-pointer *:text-4xl *:disabled:cursor-no-drop'>
				<button disabled={counter >= 10} onClick={() => dispatch(increment(1))}>
					<FiPlusCircle />
				</button>
				<button disabled={counter <= 1} onClick={() => dispatch(decrement(1))}>
					<FiMinusCircle />
				</button>
			</div>
			<h1 className='text-2xl pointer-events-none'>{counter}</h1>
		</div>
	)
}
