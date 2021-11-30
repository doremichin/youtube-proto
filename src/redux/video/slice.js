import { createSlice } from '@reduxjs/toolkit';

const videoSlice = createSlice({
  name: 'video',
  initialState: {
    data: {},
    list: {
      items: [],
    },
    comments: {},
  },
  reducers: {
    getVideoById: () => {},
    setVideoById: (state, { payload }) => {
      state.data = { ...payload };
    },
    getVideoList: () => {},
    setVideoList: (state, { payload }) => {
      state.list = {
        ...payload,
        items: [
          ...state.list.items,
          ...payload.items,
        ],
      };
    },
    getVideoComments: () => {},
    setVideoComments: (state, { payload }) => {
      state.comments = { ...payload };
    },
    getNewVideoList: () => {},
    setNewVideoList: (state, { payload }) => {
      state.list = payload;
    },
  },
});

export default videoSlice.reducer;
export const {
  getVideoById, setVideoById, getVideoList, setVideoList, getVideoComments, setVideoComments, getNewVideoList, setNewVideoList,
} = videoSlice.actions;
export const selectVideo = (state) => state.video;
