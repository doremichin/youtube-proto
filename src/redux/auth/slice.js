import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
  },
  reducers: {
    setUserInfo: (state, { payload }) => {
      state.user = payload;
    },
  },
});

export default authSlice.reducer;
export const { setUserInfo } = authSlice.actions;
