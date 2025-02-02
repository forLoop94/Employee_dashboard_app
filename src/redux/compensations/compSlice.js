import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const baseURL = 'http://localhost:5000/api';

export const getAllComps = createAsyncThunk("compensations/getAllComps", async () => {
  // const token = localStorage.getItem("token");

  const response = await fetch(`${baseURL}/compensations`, {
    method: "GET",
    // headers: {
    //   authorization: `Bearer ${token}`,
    // },
  });
  const data = await response.json();
  return data;
});

export const createCompensation = createAsyncThunk('compensations/createCompensation', async(data) => {
  try {
    const response = await fetch(`${baseURL}/compensations`, {
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

const initialState = {
  compensations: []
}

const compSlice = createSlice({
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

export default compSlice.reducer;