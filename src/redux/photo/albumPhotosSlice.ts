import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Photo, PhotoState } from "../../types/photoTypes";

const initialState: PhotoState = {
  loading: false,
  photos: [],
  filteredPhotos: [],
  error: null,
};

export const fetchPhotosByAlbumId = createAsyncThunk(
  "ALBUM_PHOTOS_FETCHER/fetchPhotosByAlbumId",
  async (id: number | undefined, { rejectWithValue, fulfillWithValue }) => {
    if (id == undefined) {
      return rejectWithValue("O Id do usuário precisa ser válido");
    }
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/albums/${id}/photos`
      );
      const data: Photo[] = await response.json();
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const { reducer, actions } = createSlice({
  name: "ALBUM_PHOTOS_FETCHER",
  initialState,
  reducers: {
    filterPhotoBySearch: (state, actions) => {
      state.filteredPhotos = state.photos.filter((album) =>
        album.title.toLowerCase().includes(actions.payload.toLowerCase())
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPhotosByAlbumId.fulfilled, (state, action) => {
      state.photos = action.payload;
      state.filteredPhotos = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchPhotosByAlbumId.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPhotosByAlbumId.rejected, (state, action) => {
      state.error = action.error.message || "Unknown error";
      state.loading = false;
    });
  },
});

export default reducer;
export const {filterPhotoBySearch} = actions;
