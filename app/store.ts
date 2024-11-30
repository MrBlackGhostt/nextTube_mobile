import { configureStore } from "@reduxjs/toolkit";

import postsReducer from '@/features/posts/postSlice'
import firstVideoReduce from "@/features/posts/initialVideos"


export const store = configureStore({
      // Pass in the root reducer setup as the `reducer` argument
      reducer: {
        // Declare that `state.counter` will be updated by the `counterReducer` function
        posts: postsReducer,
        firstVideo: firstVideoReduce
      }
    })

    // Infer the type of `store`
export type AppStore = typeof store
// Infer the `AppDispatch` type from the store itself
export type AppDispatch = typeof store.dispatch
// Same for the `RootState` type
export type RootState = ReturnType<typeof store.getState>
