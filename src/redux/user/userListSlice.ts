import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User, UserListState } from "../../types/userTypes";

const initialState: UserListState = {
  loading: false,
  users: [],
  error: null,
};

export const fetchUsers = createAsyncThunk(
  "USER_LIST_FETCHER/fetchUsers",
  async (args, { rejectWithValue, fulfillWithValue }) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data: User[] = await response.json();
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const { reducer } = createSlice({
  name: 'USER_LIST_FETCHER',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.error = action.error.message || 'Unknown error';
      state.loading = false;
    });
  },
});

export default reducer;