import { createSlice } from '@reduxjs/toolkit';

const videoSlice = createSlice({
  name: 'video',
  initialState: {
    data: {},
    list: {},
    comments: {},
  },
  reducers: {
    getVideoById: () => {},
    setVideoById: (state, { payload }) => {
      state.data = { ...payload };
    },
    getVideoList: () => {},
    setVideoList: (state, { payload }) => {
      state.list = { ...payload };
    },
    getVideoComments: () => {},
    setVideoComments: (state, { payload }) => {
      state.comments = { ...payload };
    },
  },
});

export default videoSlice.reducer;
export const {
  getVideoById, setVideoById, getVideoList, setVideoList, getVideoComments, setVideoComments,
} = videoSlice.actions;
export const selectVideo = (state) => state.video;

// const initialState = {
//   data: {},
//   list: {},
//   comments: {},
// };
// export const Action = {
//   Types: {
//     GET_VIDEO_BY_ID: '@@VIDEO/GET_VIDEO_BY_ID',
//     SET_VIDEO_BY_ID: '@@VIDEO/SET_VIDEO_BY_ID',
//     GET_VIDEO_LIST: '@@VIDEO/GET_VIDEO_LIST',
//     SET_VIDEO_LIST: '@@VIDEO/SET_VIDEO_LIST',
//     GET_VIDEO_COMMENTS: '@@VIDEO/GET_VIDEO_COMMENTS',
//     SET_VIDEO_COMMENTS: '@@VIDEO/SET_VIDEO_COMMENTS',
//   },
//   Creators: {
//     getVideoById: (payload) => ({
//       type: Action.Types.GET_VIDEO_BY_ID,
//       payload,
//     }),
//     setVideoById: (payload) => ({
//       type: Action.Types.SET_VIDEO_BY_ID,
//       payload,
//     }),
//     getVideoList: (payload) => ({
//       type: Action.Types.GET_VIDEO_LIST,
//       payload,
//     }),
//     setVideoList: (payload) => ({
//       type: Action.Types.SET_VIDEO_LIST,
//       payload,
//     }),
//     getVideoComments: (payload) => ({
//       type: Action.Types.GET_VIDEO_COMMENTS,
//       payload,
//     }),
//     setVideoComments: (payload) => ({
//       type: Action.Types.SET_VIDEO_COMMENTS,
//       payload,
//     }),
//   },
// };
// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     default: return state;
//     case Action.Types.SET_VIDEO_BY_ID: {
//       return {
//         ...state,
//         data: { ...action.payload }
//         ,
//       };
//     }
//     case Action.Types.SET_VIDEO_LIST: {
//       return {
//         ...state,
//         list: { ...action.payload },
//       };
//     }
//     case Action.Types.SET_VIDEO_COMMENTS: {
//       return {
//         ...state,
//         comments: { ...action.payload },
//       };
//     }
//   }
// };
//
// export default reducer;
