import { createSlice } from '@reduxjs/toolkit';

const channelsSlice = createSlice({
  name: 'channels',
  initialState: {
    category: {},
    selectedCategoryId: 0,
  },
  reducers: {
    getChannelsData: () => {
    },
    setChannelsData: (state, { payload }) => {
      state[payload.id] = payload.data;
    },
    getChannelsCategory: () => {
    },
    setChannelsCategory: (state, { payload }) => {
      state.category = payload;
    },
    setCategoryId: (state, { payload }) => {
      state.selectedCategoryId = payload;
    },
  },
});

export default channelsSlice.reducer;
export const {
  getChannelsData, setChannelsData, getChannelsCategory, setChannelsCategory, setCategoryId,
} = channelsSlice.actions;
export const selectChannels = (state) => state.channels;
