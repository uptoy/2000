import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'
import axios from "axios"

interface IPost {
    title: string;
    excerpt: string;
    image: string;
}


export interface PostReduxState {
    posts: IPost[]
}

const initialState: PostReduxState = {
    posts: []
}

export const postReduxSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchPosts.pending, (state, action) => {
        })
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.posts = action.payload
        })
        builder.addCase(fetchPosts.rejected, (state, action) => {
        })
    },
})


export const fetchPosts = createAsyncThunk(
    'post/fetchPosts',
    async () => {
        const res = await axios.get<IPost[]>(`${process.env.REACT_APP_API_URL}/posts`)
        return res.data
    }
)

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions
// export const { increment, decrement, incrementByAmount } = postReduxSlice.actions
export const selectPost = (state: RootState) => state.post

export default postReduxSlice.reducer