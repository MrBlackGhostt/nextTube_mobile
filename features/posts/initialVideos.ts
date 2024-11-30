import { VideoItem } from "@/app/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";



const initialState: VideoItem[] = [];

const firstVideosSlice = createSlice({
    name: 'firstVideo',
    initialState,
    reducers: {
        addVideo(state, action: PayloadAction<VideoItem[]>) {
            // Use Immer's support for mutation syntax
            state.push(...action.payload);

            // Alternatively, if you prefer immutable updates:
            // return [...state, ...action.payload];
        },
    },
});

export const { addVideo } = firstVideosSlice.actions;

export default firstVideosSlice.reducer;
