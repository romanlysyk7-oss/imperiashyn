import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { ProductItem } from '@/entities/products/model/types';

export interface BookmarksState {
	bookmarksItems: ProductItem[]
}

const initialState: BookmarksState = {
	bookmarksItems: [],
}

export const bookmarksSlice = createSlice({
	name: 'bookmarks',
	initialState,
	reducers: {
		addBookmarks: (state, actions: PayloadAction<ProductItem>) => {
			state.bookmarksItems.push(actions.payload);
		},
		addBookmarksFromStorage: (state, actions: PayloadAction<ProductItem[]>) => {
			state.bookmarksItems = actions.payload;
		},
		removeBookmarks: (state, actions: PayloadAction<number>) => {
			state.bookmarksItems = state.bookmarksItems.filter(item => item.id !== actions.payload);
		},
		reset: () => initialState,
	},
});

export const { addBookmarks, removeBookmarks, addBookmarksFromStorage, reset } = bookmarksSlice.actions

export default bookmarksSlice.reducer
