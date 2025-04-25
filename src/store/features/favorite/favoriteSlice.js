const { createSlice } = require('@reduxjs/toolkit')

const initialState = {
	value: [],
}

const favorite = createSlice({
	name: 'favorite',
	initialState,
	reducers: {
		toggleFavorite: (state, { payload }) => {
			const isExists = state.value.some(item => item.id === payload.id)
			if (isExists) {
				const index = state.value.findIndex(item => item.id !== payload.id)
				if (index !== -1) {
					state.value.splice(index, 1)
				}
			} else {
				state.value.push(payload)
			}
		},
	},
})

export const { toggleFavorite } = favorite.actions
export default favorite.reducer
