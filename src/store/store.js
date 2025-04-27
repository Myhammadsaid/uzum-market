import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cart/cartSlice'
import counterReducer from './features/counter/counterSlice'
import favoriteReducer from './features/favorite/favoriteSlice'

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		favorite: favoriteReducer,
		cart: cartReducer,
	},
})
