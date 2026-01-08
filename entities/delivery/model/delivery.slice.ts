import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface Items {
	value: string
	label: string
}

export interface DeliveryState {
	city: Items
	wirehouse: Items
}

const initialState: DeliveryState = {
	city: {
		value: '',
		label: '',
	},
	wirehouse: {
		value: '',
		label: '',
	},
}

export const deliverySlice = createSlice({
	name: 'delivery',
	initialState,
	reducers: {
		setCity: (state, actions: PayloadAction<{ value: string, label: string }>) => {
			state.city = actions.payload
		},
		setWirehouse: (state, actions: PayloadAction<{ value: string, label: string }>) => {
			state.wirehouse = actions.payload
		},
		reset: () => initialState,
	},
})

export const { setCity, setWirehouse, reset } = deliverySlice.actions

export default deliverySlice.reducer
