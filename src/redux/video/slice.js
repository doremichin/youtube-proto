const initialState = {
  items: [
    { player: {} },
  ],
};
export const Action = {
  Types: {
    GET_VIDEO_BY_ID: '@@VIDEO/GET_VIDEO_BY_ID',
    SET_VIDEO_BY_ID: '@@VIDEO/SET_VIDEO_BY_ID',
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
  }
};

export default reducer;
