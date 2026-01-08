import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { ProductItem } from '@/entities/products/model/types';

export interface CartState {
	cartItems: ProductItem[]
}

const initialState: CartState = {
	cartItems: [],
}

export const cartSlice = createSlice({
	name: 'cartSlice',
	initialState,
	reducers: {
		addItem: (state, actions: PayloadAction<ProductItem>) => {
			state.cartItems.push(actions.payload);
		},
		addItemsFromStorage: (state, actions: PayloadAction<ProductItem[]>) => {
			state.cartItems = actions.payload;
		},
		removeItem: (state, actions: PayloadAction<number>) => {
			state.cartItems = state.cartItems.filter(item => item.id !== actions.payload);
		},
		setQuantity: (state, actions: PayloadAction<ProductItem>) => {
			state.cartItems = [
				...state.cartItems.filter(item => item.id !== actions.payload.id),
				{ id: actions.payload.id, quantity: actions.payload.quantity, section: actions.payload.section }
			];
		},
		reset: () => initialState,
	},
});

export const { addItem, addItemsFromStorage, removeItem, setQuantity, reset } = cartSlice.actions
export default cartSlice.reducer
