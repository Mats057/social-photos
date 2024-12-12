import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Album, AlbumState } from "../../types/albumTypes";

const initialState: AlbumState = {
  loading: false,
  album: null,
  error: null,
};

export const fetchAlbumById = createAsyncThunk(
  "USER_FETCHER/fetchAlbumById",
  async (id:number | undefined, { rejectWithValue, fulfillWithValue }) => {
    if(id == undefined){
        return rejectWithValue("The album ID needs to be valid!");
    }
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/albums/${id}`
      );
      const data: Album = await response.json();
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const { reducer } = createSlice({
  name: 'USER_FETCHER',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAlbumById.fulfilled, (state, action) => {
      state.album = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchAlbumById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchAlbumById.rejected, (state, action) => {
      state.error = action.error.message || 'Unknown error';
      state.loading = false;
    });
  },
});

export default reducer;