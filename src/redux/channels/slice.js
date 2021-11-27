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

// const initialState = {
//
// };
// export const Action = {
//   Types: {
//     GET_CHANNELS_DATA: '@@CHANNELS/GET_CHANNELS_DATA',
//     SET_CHANNELS_DATA: '@@CHANNELS/SET_CHANNELS_DATA',
//   },
//   Creators: {
//     getChannelsData: (payload) => ({
//       type: Action.Types.GET_CHANNELS_DATA,
//       payload,
//     }),
//     setChannelsData: (payload) => ({
//       type: Action.Types.SET_CHANNELS_DATA,
//       payload,
//     }),
//   },
// };
// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     default: return state;
//     case Action.Types.SET_CHANNELS_DATA: {
//       return {
//         ...state,
//         [action.payload.id]: action.payload.data,
//       };
//     }
//   }
// };
//
// export default reducer;
