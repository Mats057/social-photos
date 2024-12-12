import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Album, AlbumListState } from "../../types/albumTypes";

const initialState: AlbumListState = {
  loading: false,
  albums: [],
  filteredAlbums: [],
  error: null,
};


const fetchAlbums = createAsyncThunk(
  "ALBUM_LIST_FETCHER/fetchAlbums",
  async (args, { rejectWithValue, fulfillWithValue }) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/albums"
      );
      const data: Album[] = await response.json();
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const { reducer } = createSlice({
  name: 'ALBUM_LIST_FETCHER',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAlbums.fulfilled, (state, action) => {
      state.albums = action.payload;
      state.filteredAlbums = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchAlbums.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchAlbums.rejected, (state, action) => {
      state.error = action.error.message || 'Unknown error';
      state.loading = false;
    });
  },
});

export default reducer;
