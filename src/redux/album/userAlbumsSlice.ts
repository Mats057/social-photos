import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Album, AlbumListState } from "../../types/albumTypes";

const initialState: AlbumListState = {
  loading: false,
  albums: [],
  filteredAlbums: [],
  error: null,
};

export const fetchAlbumsByUserId = createAsyncThunk(
  "USER_ALBUMS_FETCHER/fetchAlbumsByUserId",
  async (id: number | undefined, { rejectWithValue, fulfillWithValue }) => {
    if (id == undefined) {
      return rejectWithValue("O Id do usuário precisa ser válido");
    }
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}/albums`
      );
      const data: Album[] = await response.json();
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const { reducer, actions } = createSlice({
  name: "USER_ALBUMS_FETCHER",
  initialState,
  reducers: {
    filterAlbumBySearch: (state, actions) => {
      state.filteredAlbums = state.albums.filter((album) =>
        album.title.toLowerCase().includes(actions.payload.toLowerCase())
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAlbumsByUserId.fulfilled, (state, action) => {
      state.albums = action.payload;
      state.filteredAlbums = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchAlbumsByUserId.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchAlbumsByUserId.rejected, (state, action) => {
      state.error = action.error.message || "Unknown error";
      state.loading = false;
    });
  },
});

export default reducer;
export const {filterAlbumBySearch} = actions;
