import { createSlice } from "@reduxjs/toolkit";

interface ProgressState {
	progress: boolean;
}

const initialState: ProgressState = {
	progress: false,
};

const progressSlice = createSlice({
	name: "progress",
	initialState,
	reducers: {
		showProgress: (state) => {
			state.progress = true;
		},
		hideProgress: (state) => {
			state.progress = false;
		},
	},
});

export const { showProgress, hideProgress } = progressSlice.actions;
export default progressSlice.reducer;
