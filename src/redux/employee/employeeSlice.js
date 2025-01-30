import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { singleEmployee } from "../../dummys/employeeData";

const baseURL = "http://localhost:5000/api";

const initialState = {
  employees: [],
};

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  const token = localStorage.getItem("token");

  const response = await fetch(`${baseURL}/users`, {
    method: "GET",
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  return data;
});

const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.employees = action.payload;
    });
  },
});

export default employeeSlice.reducer;
