import { VideoItem } from "@/app/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: VideoItem[] = [];

const firstVideosSlice = createSlice({
  name: "firstVideo",
  initialState,
  reducers: {
    addVideo(state, action: PayloadAction<VideoItem[]>) {
      state.push(...action.payload);
    },
  },
});

export const { addVideo } = firstVideosSlice.actions;

export default firstVideosSlice.reducer;
