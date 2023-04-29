import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  value: number;
}

// const initialState: CounterState = {
//   value: 0,
// }

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    items: Array<any>([]),
  },
  reducers: {
    addPost: function (state, action) {
      state.items.push(action.payload);
    },
    
    deletePost: function (state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    updatePost: function(state, action) {
      state.items.map(item => {
        if (item.id === action.payload.id) {
          item.title = action.payload.title;
          item.description = action.payload.description;
        }
        return true;
      })
    }
  },
});

// Action creators are generated for each case reducer function
export const { addPost, deletePost, updatePost } = postsSlice.actions;

export default postsSlice.reducer;
