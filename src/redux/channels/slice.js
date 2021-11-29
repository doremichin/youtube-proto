import { createSlice } from '@reduxjs/toolkit';

const channelsSlice = createSlice({
  name: 'channels',
  initialState: {},
  reducers: {
    getChannelsData: () => {},
    setChannelsData: (state, { payload }) => {
      state[payload.id] = payload.data;
    },
  },

});

export default channelsSlice.reducer;
export const { getChannelsData, setChannelsData } = channelsSlice.actions;
export const selectChannels = (state) => state.channels;
