import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//
// };
// export const Action = {
//   Types: {
//     GET_SEARCH_RESULTS: '@@SEARCH/GET_SEARCH_RESULTS',
//     SET_SEARCH_RESULTS: '@@SEARCH/SET_SEARCH_RESULTS',
//   },
//   Creators: {
//     getSearchResults: (payload) => ({
//       type: Action.Types.GET_SEARCH_RESULTS,
//       payload,
//     }),
//     setSearchResults: (payload) => ({
//       type: Action.Types.SET_SEARCH_RESULTS,
//       payload,
//     }),
//   },
// };
// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     default: return state;
//     case Action.Types.SET_SEARCH_RESULTS: {
//       return {
//         ...state,
//         ...action.payload,
//       };
//     }
//   }
// };
//
// export default reducer;

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    data: {},
  },
  reducers: {
    getSearchResults: (state) => {},
    setSearchResults: (state, { payload }) => {
      state.data = payload;
    },
  },
});

export default searchSlice.reducer;
export const searchActions = searchSlice.actions;
export const selectSearchData = (state) => state.search.data;
