const initialState = {
  items: [
    { player: {} },
  ],
  list: {},
};
export const Action = {
  Types: {
    GET_VIDEO_BY_ID: '@@VIDEO/GET_VIDEO_BY_ID',
    SET_VIDEO_BY_ID: '@@VIDEO/SET_VIDEO_BY_ID',
    GET_VIDEO_LIST: '@@VIDEO/GET_VIDEO_LIST',
    SET_VIDEO_LIST: '@@VIDEO/SET_VIDEO_LIST',
  },
  Creators: {
    getVideoById: (payload) => ({
      type: Action.Types.GET_VIDEO_BY_ID,
      payload,
    }),
    setVideoById: (payload) => ({
      type: Action.Types.SET_VIDEO_BY_ID,
      payload,
    }),
    getVideoList: (payload) => ({
      type: Action.Types.GET_VIDEO_LIST,
      payload,
    }),
    setVideoList: (payload) => ({
      type: Action.Types.SET_VIDEO_LIST,
      payload,
    }),
  },
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    default: return state;
    case Action.Types.SET_VIDEO_BY_ID: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case Action.Types.SET_VIDEO_LIST: {
      return {
        ...state,
        list: { ...action.payload },
      };
    }
  }
};

export default reducer;
