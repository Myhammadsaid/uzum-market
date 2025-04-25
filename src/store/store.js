import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'
import favoriteReducer from './features/favorite/favoriteSlice'

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		favorite: favoriteReducer,
	},
})
