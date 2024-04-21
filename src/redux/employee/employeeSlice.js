import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { singleEmployee } from "../../dummys/employeeData";

const baseURL = "http://localhost:5000/api";

const initialState = {
  employee: singleEmployee,
};

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");
  try {
    const response = await fetch(`${baseURL}/users`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      localStorage.setItem(
        "refreshToken",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MWVkZTQ3OTcyZDAxZjQ1NTljYTJlZSIsImlhdCI6MTcxMzY0OTUxMCwiZXhwIjoxNzEzOTk1MTEwfQ.TW7qi4fpgztgYgmUu32qgGuAFMRPAiB-ufZs0b9aTfU"
      );
    } else {
      throw new Error('Request failed with status ' + response.status);
    }
  } catch (error) {
    console.log("Fetch error:", error);
    console.log(error.message)
    if (error instanceof TypeError) {
      console.log("Network error occurred");
      // Handle network errors here
    } else if (error.message && error.message === "Request failed with status 401") {
      try {
        const res = await fetch(`${baseURL}/auth/refresh`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: "661ede47972d01f4559ca2ee",
            token: refreshToken,
          }),
        });
        if (res.ok) {
          const newToken = await res.text();
          localStorage.setItem("accessToken", newToken);
          getUsers();
        } else {
          throw new Error(
            "Refresh token request failed with status " + res.status
          );
        }
      } catch (error) {
        console.log("Refresh token error:", error);
      }
    } else {
      console.log("Unhandled error:", error);
    }
  }
});

const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {},
});

export default employeeSlice.reducer;
