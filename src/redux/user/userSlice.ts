import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User, UserState } from "../../types/userTypes";

const initialState: UserState = {
  loading: false,
  user: null,
  error: null,
};

export const fetchUserById = createAsyncThunk(
  "USER_FETCHER/fetchUserById",
  async (id: number | undefined, { rejectWithValue, fulfillWithValue }) => {
    if (id == undefined) {
      return rejectWithValue("O Id do usuário precisa ser válido");
    }
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      const data: User = await response.json();
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const { reducer } = createSlice({
  name: "USER_FETCHER",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchUserById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUserById.rejected, (state, action) => {
      state.error = action.error.message || "Unknown error";
      state.loading = false;
    });
  },
});

export default reducer;
