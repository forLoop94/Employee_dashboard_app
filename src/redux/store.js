import { configureStore } from "@reduxjs/toolkit";
import employeeSlice from "./employee/employeeSlice";
import authSlice from "./auth/authSlice";

const store = configureStore({
  reducer: {
    employee: employeeSlice,
    user: authSlice,
  }
})

export default store;
