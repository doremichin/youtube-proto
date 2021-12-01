import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    data: {
      items: [],
    },
    relatedVideos: {
      items: [],
    },
  },
  reducers: {
    getSearchResults: () => {},
    setSearchResults: (state, { payload }) => {
      state.data = {
        ...payload,
        items: [
          ...state.data.items,
          ...payload.items,
        ],
      };
    },
    getRelatedVideos: () => {},
    setRelatedVideos: (state, { payload }) => {
      state.relatedVideos = {
        ...payload,
        items: [
          ...state.relatedVideos.items,
          ...payload.items,
        ],
      };
    },

  },
});

export default searchSlice.reducer;
export const {
  getSearchResults, setSearchResults, getRelatedVideos, setRelatedVideos,
} = searchSlice.actions;
export const selectSearchData = (state) => state.search.data;
