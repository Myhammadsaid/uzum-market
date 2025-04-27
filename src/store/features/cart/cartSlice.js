const { createSlice } = require('@reduxjs/toolkit')

const initialState = {
	value: [],
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, { payload }) => {
			const isExists = state.value.some(item => item.id === payload.id)
			if (isExists) {
				state.value
			} else {
				state.value.push({ ...payload, quantity: 1 })
			}
		},
		removeFromCart: (state, { payload }) => {
			const filtered = state.value.filter(item => item.id !== payload.id)
			state.value = [...filtered]
		},
		incFromCart: (state, { payload }) => {
			const isExists = state.value.some(item => item.id === payload.id)
			if (isExists) {
				const filtered = state.value.filter(item => item.id !== payload.id)
				state.value.filter(item =>
					item.id === payload.id
						? (state.value = [
								...filtered,
								{ ...payload, quantity: item.quantity + 1 },
						  ])
						: item
				)
			}
		},
		decFromCart: (state, { payload }) => {
			const isExists = state.value.some(item => item.id === payload.id)
			if (isExists) {
				const filtered = state.value.filter(item => item.id !== payload.id)
				state.value.filter(item =>
					item.id === payload.id
						? item.quantity > 1
							? (state.value = [
									...filtered,
									{ ...payload, quantity: item.quantity - 1 },
							  ])
							: item
						: item
				)
			}
		},
		deleteAllCart: state => {
			state.value = []
		},
	},
})

export const {
	addToCart,
	removeFromCart,
	incFromCart,
	decFromCart,
	deleteAllCart,
} = cartSlice.actions
export default cartSlice.reducer
