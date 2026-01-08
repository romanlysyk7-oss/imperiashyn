import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { ProductItem } from '@/entities/products/model/types';

export interface ComparisonState {
	comparisonItems: ProductItem[]
}

const initialState: ComparisonState = {
	comparisonItems: [],
}

export const comparisonSlice = createSlice({
	name: 'comparison',
	initialState,
	reducers: {
		addComparison: (state, actions: PayloadAction<ProductItem>) => {
			state.comparisonItems.push(actions.payload);
		},
		addComparisonFromStorage: (state, actions: PayloadAction<ProductItem[]>) => {
			state.comparisonItems = actions.payload;
		},
		removeComparison: (state, actions: PayloadAction<number>) => {
			state.comparisonItems = state.comparisonItems.filter(item => item.id !== actions.payload);
		},
		reset: () => initialState,
	},
})

export const { addComparison, addComparisonFromStorage, removeComparison, reset } = comparisonSlice.actions

export default comparisonSlice.reducer
