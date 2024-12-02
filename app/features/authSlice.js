import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getInitialToken = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('token');
  }
  return null;
};

export const loadUser = createAsyncThunk(
  'auth/loadUser',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/api/auth/me', {
        headers: {
          'x-auth-token': getInitialToken()
        }
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }, thunkAPI) => {
    try {
      const res = await axios.post('/api/auth/login', { email, password });
      if (typeof window !== 'undefined') {
        localStorage.setItem('token', res.data.token);
      }
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const register = createAsyncThunk(
  'auth/register',
  async ({ fullName, email, password }, thunkAPI) => {
    try {
      const res = await axios.post('/api/users/register', { fullName, email, password });
      if (typeof window !== 'undefined') {
        localStorage.setItem('token', res.data.token);
      }
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: getInitialToken(),
    isAuthenticated: null,
    loading: false,
    user: null,
    error: null
  },
  reducers: {
    logout: (state) => {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('token');
      }
      state.token = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.user = null;
    },
    clearError: (state) => {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
      })
      .addCase(loadUser.rejected, (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.user = null;
        state.error = action.payload?.msg || 'Failed to load user';
      })
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.msg || 'Login failed';
      })
      .addCase(register.pending, (state) => {
        state.loading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.msg || 'Registration failed';
      });
  }
});

export const { logout, clearError } = authSlice.actions;

export default authSlice.reducer;

