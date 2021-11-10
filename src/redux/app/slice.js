const initialState = {
  sidebar: false,
};
export const Action = {
  Types: {
    TOGGLE_POPUP: '@@APP/TOGGLE_POPUP',
  },
  Creators: {
    togglePopup: (payload) => ({
      type: Action.Types.TOGGLE_POPUP,
      payload,
    }),

  },
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    default: return state;
    case Action.Types.TOGGLE_POPUP: {
      return {
        ...state,
        sidebar: action.payload,
      };
    }
  }
};

export default reducer;
