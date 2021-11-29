import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    data: {
      items: [],
    },
  },
  reducers: {
    getSearchResults: (state) => {},
    setSearchResults: (state, { payload }) => {
      state.data = {
        ...payload,
        items: [
          ...state.data.items,
          ...payload.items,
        ],
      };
    },
  },
});

export default searchSlice.reducer;
export const searchActions = searchSlice.actions;
export const selectSearchData = (state) => state.search.data;
