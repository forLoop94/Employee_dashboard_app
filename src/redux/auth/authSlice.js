import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const baseURL = 'http://localhost:5000/api/auth';

export const loginUser = createAsyncThunk('auth/login', async(data) => {
  try {
    const response = await fetch(`${baseURL}/login`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    if(response.ok) {
      const result = await response.json();
      console.log(result);
      return result;
    } else {
      console.log(JSON.stringify(data))
    }
  } catch (error) {
    console.log("Auth Error:", error)
  }
})

export const forgotPassword = createAsyncThunk('auth/forgotPassword', async(data) => {
  try {
    const response = await fetch(`${baseURL}/resetpassword`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    if(response.ok) {
      const result = await response.json();
      console.log(result);
      return result;
    } else {
      console.log(JSON.stringify(data))
    }
  } catch (error) {
    console.log("Auth Error:", error.response.status)
  }
})

const initialState = {
  loginInfo: ''
}

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loginInfo = action.payload;
      const { token } = state.loginInfo;
      localStorage.setItem("token", token);
    });
  },
})

export default authSlice.reducer;