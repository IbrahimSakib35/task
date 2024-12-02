import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchClasses = createAsyncThunk(
  'class/fetchClasses',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/api/classes', {
        headers: {
          'x-auth-token': localStorage.getItem('token')
        }
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const createClass = createAsyncThunk(
  'class/createClass',
  async (classData, thunkAPI) => {
    try {
      const res = await axios.post('/api/classes', classData, {
        headers: {
          'x-auth-token': localStorage.getItem('token')
        }
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const bookClass = createAsyncThunk(
  'class/bookClass',
  async (classId, thunkAPI) => {
    try {
      const res = await axios.post(`/api/classes/${classId}/book`, {}, {
        headers: {
          'x-auth-token': localStorage.getItem('token')
        }
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const classSlice = createSlice({
  name: 'class',
  initialState: {
    classes: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchClasses.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchClasses.fulfilled, (state, action) => {
        state.loading = false;
        state.classes = action.payload;
      })
      .addCase(fetchClasses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.msg;
      })
      .addCase(createClass.pending, (state) => {
        state.loading = true;
      })
      .addCase(createClass.fulfilled, (state, action) => {
        state.loading = false;
        state.classes.push(action.payload);
      })
      .addCase(createClass.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.msg;
      })
      .addCase(bookClass.pending, (state) => {
        state.loading = true;
      })
      .addCase(bookClass.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.classes.findIndex(c => c._id === action.payload._id);
        if (index !== -1) {
          state.classes[index] = action.payload;
        }
      })
      .addCase(bookClass.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.msg;
      });
  },
});

export default classSlice.reducer;

