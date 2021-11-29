import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    sidebar: false,
  },
  reducers: {
    toggleSidebar: (state, action) => {
      state.sidebar = action.payload;
    },
  },
});

export default appSlice.reducer;
export const { toggleSidebar } = appSlice.actions;
export const selectSidebar = (state) => state.app.sidebar;
