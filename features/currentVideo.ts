import { VideoClick } from "@/app/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: VideoClick = {id: ''}

const videoClickfun = createSlice({
    name: 'videoClick',
    initialState,
    reducers:{
        videoClick(state, action: PayloadAction<VideoClick>){
                state.id = action.payload.id
                state.title = action.payload.title
        }
    }
})

export const {videoClick} = videoClickfun.actions

export default videoClickfun.reducer